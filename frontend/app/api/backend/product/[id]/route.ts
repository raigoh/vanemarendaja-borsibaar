import {NextRequest, NextResponse} from "next/server";

export async function DELETE(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    const { id } = await params;
    try {
        const backendUrl =
            process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:8080";

        const response = await fetch(`${backendUrl}/api/products/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Cookie: request.headers.get("cookie") || "",
            },
            credentials: "include",
        });
        if (!response.ok) {
            const text = await response.text();
            return new NextResponse(text, { status: response.status });
        }

        return NextResponse.json({ status: response.status });
    } catch (error) {
        console.error("Proxy error:", error);
        return NextResponse.json(
            { error: "Failed to delete product" },
            { status: 500 }
        );
    }
}
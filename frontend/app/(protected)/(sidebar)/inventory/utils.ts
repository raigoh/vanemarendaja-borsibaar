import { InventoryItem, StockStatus } from './types';

export function getStockStatus(quantity: number | string): StockStatus {
  const qty = parseFloat(quantity.toString());
  if (qty === 0)
    return { color: "text-red-100", bg: "bg-red-900", label: "Out of Stock" };
  if (qty < 10)
    return {
      color: "text-yellow-600",
      bg: "bg-yellow-50",
      label: "Low Stock",
    };
  return { color: "text-green-100", bg: "bg-green-900", label: "In Stock" };
}

export function filterInventory(
  inventory: InventoryItem[],
  searchTerm: string
): InventoryItem[] {
  if (!searchTerm?.trim().length) return inventory;

  return inventory.filter((item) =>
    item.productName.toLowerCase().includes(searchTerm.toLowerCase())
  );
}

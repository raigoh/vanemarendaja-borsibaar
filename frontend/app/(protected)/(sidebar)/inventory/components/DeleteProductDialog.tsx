'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { InventoryItem } from '../types';

interface DeleteProductDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  product: InventoryItem | null;
  onConfirm: (productId: number) => void;
  onCancel: () => void;
}

export function DeleteProductDialog({
  open,
  onOpenChange,
  product,
  onConfirm,
  onCancel,
}: DeleteProductDialogProps) {
  const handleDelete = () => {
    if (product) {
      onConfirm(product.productId);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[480px]">
        <DialogHeader>
          <DialogTitle>Delete Product</DialogTitle>
          <DialogDescription>
            This action will permanently delete the product and its related
            data. Are you sure you want to continue?
          </DialogDescription>
        </DialogHeader>

        <div className="mt-4">
          <p className="text-sm text-gray-300">
            Product:{' '}
            <span className="font-semibold">{product?.productName}</span>
          </p>
          <p className="text-sm text-gray-400 mt-2">
            ID:{' '}
            <span className="font-mono">
              {product?.productId ?? product?.id}
            </span>
          </p>
        </div>

        <div className="mt-6 flex justify-end gap-3">
          <Button variant="outline" onClick={onCancel}>
            Cancel
          </Button>
          <Button
            className="bg-rose-600 hover:bg-rose-700 text-white"
            onClick={handleDelete}
          >
            Delete
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

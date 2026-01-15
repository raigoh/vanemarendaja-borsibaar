'use client';

import { Button } from '@/components/ui/button';
import { ListPlus, Package, Plus } from 'lucide-react';

interface InventoryHeaderProps {
  totalItems: number;
  onCreateCategory: () => void;
  onCreateProduct: () => void;
}

export function InventoryHeader({
  totalItems,
  onCreateCategory,
  onCreateProduct,
}: InventoryHeaderProps) {
  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-3">
        <Package className="w-8 h-8 text-blue-600" />
        <h1 className="text-3xl font-bold text-gray-100">
          Inventory Management
        </h1>
      </div>
      <div className="flex items-center gap-4">
        <Button
          onClick={onCreateCategory}
          className="flex items-center gap-2 px-4 py-2 bg-blue-100 text-black rounded-lg hover:bg-blue-200 transition font-medium"
        >
          <ListPlus className="w-4 h-4" />
          <span className="flex">New Category</span>
        </Button>
        <Button
          onClick={onCreateProduct}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"
        >
          <Plus className="w-4 h-4" />
          <span className="flex">New Product</span>
        </Button>
        <div className="text-sm text-gray-400">Total Items: {totalItems}</div>
      </div>
    </div>
  );
}

'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useEffect, useState } from 'react';
import { Category } from '../types';
import { ValidationError, validateCategoryName } from '../validation';

interface CreateCategoryDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  categoryForm: {
    name: string;
    dynamicPricing: boolean;
  };
  categories: Category[];
  onFormChange: (
    field: 'name' | 'dynamicPricing',
    value: string | boolean
  ) => void;
  onConfirm: () => void;
}

export function CreateCategoryDialog({
  open,
  onOpenChange,
  categoryForm,
  categories,
  onFormChange,
  onConfirm,
}: CreateCategoryDialogProps) {
  const [nameError, setNameError] = useState<ValidationError | null>(null);

  // Get existing category names for duplicate checking
  const existingCategoryNames = categories.map(cat => cat.name);

  // Validate category name on change
  useEffect(() => {
    if (categoryForm.name) {
      const error = validateCategoryName(
        categoryForm.name,
        existingCategoryNames
      );
      setNameError(error);
    } else {
      setNameError(null);
    }
  }, [categoryForm.name, existingCategoryNames]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Create New Category</DialogTitle>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Category Name *
            </label>
            <Input
              type="text"
              value={categoryForm.name}
              onChange={e => onFormChange('name', e.target.value)}
              className="w-full px-3 py-2 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Category name"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Dynamic Pricing *
            </label>
            <Select
              value={categoryForm.dynamicPricing ? 'enabled' : 'disabled'}
              onValueChange={value =>
                onFormChange('dynamicPricing', value === 'enabled')
              }
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select pricing type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="enabled">Enabled</SelectItem>
                <SelectItem value="disabled">Disabled</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button
            onClick={onConfirm}
            disabled={!categoryForm.name}
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition font-medium disabled:bg-gray-700 disabled:cursor-not-allowed"
          >
            Create Category
          </Button>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

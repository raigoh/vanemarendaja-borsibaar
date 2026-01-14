export interface InventoryTransactionResponseDto {
  id: number;
  inventoryId: number;
  transactionType: string;
  quantityChange: number;
  quantityBefore: number;
  quantityAfter: number;
  referenceId?: string;
  notes?: string;
  createdBy: string;
  createdByName?: string;
  createdByEmail?: string;
  createdAt: string;
}

export interface InventoryItem {
  id: number;
  productId: number;
  productName: string;
  basePrice: string;
  minPrice: string;
  maxPrice: string;
  quantity: number;
  updatedAt: string;
}

export interface Category {
  id: number;
  name: string;
  dynamicPricing: boolean;
}

export interface StockStatus {
  color: string;
  bg: string;
  label: string;
}

import { InventoryItem } from '../types';

interface UseInventoryModalHandlersProps {
  openAdjustModal: (item: InventoryItem) => void;
  openHistoryModal: (item: InventoryItem) => void;
  setFormData: (data: {
    quantity: string;
    notes: string;
    referenceId: string;
  }) => void;
  formData: {
    quantity: string;
    notes: string;
    referenceId: string;
  };
  fetchTransactionHistory: (productId: number) => Promise<void>;
}

export function useInventoryModalHandlers({
  openAdjustModal,
  openHistoryModal,
  setFormData,
  formData,
  fetchTransactionHistory,
}: UseInventoryModalHandlersProps) {
  const handleOpenAdjustModal = (item: InventoryItem) => {
    setFormData({ ...formData, quantity: item.quantity.toString() });
    openAdjustModal(item);
  };

  const handleOpenHistoryModal = async (item: InventoryItem) => {
    openHistoryModal(item);
    await fetchTransactionHistory(item.productId);
  };

  return {
    handleOpenAdjustModal,
    handleOpenHistoryModal,
  };
}

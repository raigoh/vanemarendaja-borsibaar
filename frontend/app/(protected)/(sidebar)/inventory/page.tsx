'use client';

import { InventoryContent } from './components/InventoryContent';
import { InventoryDialogs } from './components/InventoryDialogs';
import { InventoryLoading } from './components/InventoryLoading';
import { useInventoryPage } from './hooks/useInventoryPage';

export const dynamic = 'force-dynamic';

export default function Inventory() {
  const {
    inventory,
    filteredInventory,
    categories,
    transactionHistory,
    loading,
    loadingHistory,
    error,
    searchTerm,
    setSearchTerm,
    showAddModal,
    showRemoveModal,
    showAdjustModal,
    showHistoryModal,
    showCreateProductModal,
    showDeleteProductModal,
    showCreateCategoryModal,
    selectedProduct,
    setShowAddModal,
    setShowRemoveModal,
    setShowAdjustModal,
    setShowHistoryModal,
    setShowCreateProductModal,
    setShowDeleteProductModal,
    setShowCreateCategoryModal,
    setSelectedProduct,
    formData,
    categoryForm,
    productForm,
    setFormData,
    setCategoryForm,
    setProductForm,
    openAddModal,
    openRemoveModal,
    handleOpenAdjustModal,
    handleOpenHistoryModal,
    openDeleteModal,
    handleCreateProduct,
    handleAddStock,
    handleRemoveStock,
    handleAdjustStock,
    handleAddCategory,
    handleDeleteProduct,
  } = useInventoryPage();

  if (loading) {
    return <InventoryLoading />;
  }

  return (
    <>
      <InventoryContent
        inventory={inventory}
        filteredInventory={filteredInventory}
        searchTerm={searchTerm}
        error={error}
        onSearchChange={setSearchTerm}
        onAddStock={openAddModal}
        onRemoveStock={openRemoveModal}
        onAdjustStock={handleOpenAdjustModal}
        onViewHistory={handleOpenHistoryModal}
        onDeleteProduct={openDeleteModal}
        onCreateCategory={() => setShowCreateCategoryModal(true)}
        onCreateProduct={() => setShowCreateProductModal(true)}
      />

      <InventoryDialogs
        showAddModal={showAddModal}
        showRemoveModal={showRemoveModal}
        showAdjustModal={showAdjustModal}
        showHistoryModal={showHistoryModal}
        showCreateProductModal={showCreateProductModal}
        showDeleteProductModal={showDeleteProductModal}
        showCreateCategoryModal={showCreateCategoryModal}
        selectedProduct={selectedProduct}
        setShowAddModal={setShowAddModal}
        setShowRemoveModal={setShowRemoveModal}
        setShowAdjustModal={setShowAdjustModal}
        setShowHistoryModal={setShowHistoryModal}
        setShowCreateProductModal={setShowCreateProductModal}
        setShowDeleteProductModal={setShowDeleteProductModal}
        setShowCreateCategoryModal={setShowCreateCategoryModal}
        setSelectedProduct={setSelectedProduct}
        formData={formData}
        categoryForm={categoryForm}
        productForm={productForm}
        setFormData={setFormData}
        setCategoryForm={setCategoryForm}
        setProductForm={setProductForm}
        categories={categories}
        transactionHistory={transactionHistory}
        loadingHistory={loadingHistory}
        handleCreateProduct={handleCreateProduct}
        handleAddStock={handleAddStock}
        handleRemoveStock={handleRemoveStock}
        handleAdjustStock={handleAdjustStock}
        handleAddCategory={handleAddCategory}
        handleDeleteProduct={handleDeleteProduct}
      />
    </>
  );
}

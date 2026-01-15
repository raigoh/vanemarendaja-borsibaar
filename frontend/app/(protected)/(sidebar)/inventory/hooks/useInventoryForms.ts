import { useState } from 'react';

export function useInventoryForms() {
  const [formData, setFormData] = useState({
    quantity: '',
    notes: '',
    referenceId: '',
  });

  const [categoryForm, setCategoryForm] = useState({
    name: '',
    dynamicPricing: true,
  });

  const [productForm, setProductForm] = useState({
    name: '',
    description: '',
    categoryId: '',
    currentPrice: '',
    minPrice: '',
    maxPrice: '',
    initialQuantity: '',
    notes: '',
  });

  const resetFormData = () => {
    setFormData({ quantity: '', notes: '', referenceId: '' });
  };

  const resetCategoryForm = () => {
    setCategoryForm({
      name: '',
      dynamicPricing: true,
    });
  };

  const resetProductForm = () => {
    setProductForm({
      name: '',
      description: '',
      categoryId: '',
      currentPrice: '',
      minPrice: '',
      maxPrice: '',
      initialQuantity: '',
      notes: '',
    });
  };

  return {
    formData,
    categoryForm,
    productForm,
    setFormData,
    setCategoryForm,
    setProductForm,
    resetFormData,
    resetCategoryForm,
    resetProductForm,
  };
}

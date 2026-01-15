/**
 * Inventory validation utilities
 * Provides validation functions for product, category, and stock operations
 */

/**
 * Represents a single validation error for a specific field
 */
export interface ValidationError {
  field: string;
  message: string;
}

/**
 * Result of a validation operation
 * Contains isValid flag and array of validation errors
 */
export interface ValidationResult {
  isValid: boolean;
  errors: ValidationError[];
}

/**
 * Validates a product name
 * Checks for empty name, minimum length, and duplicate names
 * @param name - Product name to validate
 * @param existingNames - Array of existing product names (for duplicate check)
 * @returns Validation error or null if valid
 */
export function validateProductName(
  name: string,
  existingNames: string[] = []
): ValidationError | null {
  if (!name || name.trim().length === 0) {
    return {
      field: 'name',
      message: 'Product name is required',
    };
  }

  if (name.trim().length < 2) {
    return {
      field: 'name',
      message: 'Product name must be at least 2 characters',
    };
  }

  const normalizedName = name.trim().toLowerCase();
  if (
    existingNames.some(existing => existing.toLowerCase() === normalizedName)
  ) {
    return {
      field: 'name',
      message: 'A product with this name already exists',
    };
  }

  return null;
}

/**
 * Validates a price value
 * Checks for empty value, valid number, and non-negative value
 * @param price - Price string to validate
 * @param fieldName - Field name for error message (e.g., "Current price", "Min price")
 * @returns Validation error or null if valid
 */
export function validatePrice(
  price: string,
  fieldName: string
): ValidationError | null {
  if (!price || price.trim().length === 0) {
    return {
      field: fieldName.toLowerCase().replace(' ', ''),
      message: `${fieldName} is required`,
    };
  }

  const priceNum = parseFloat(price);
  if (isNaN(priceNum)) {
    return {
      field: fieldName.toLowerCase().replace(' ', ''),
      message: `${fieldName} must be a valid number`,
    };
  }

  if (priceNum < 0) {
    return {
      field: fieldName.toLowerCase().replace(' ', ''),
      message: `${fieldName} cannot be negative`,
    };
  }

  return null;
}

/**
 * Validates price range (min <= max)
 * Checks that minimum price is less than or equal to maximum price
 * @param minPrice - Minimum price string
 * @param maxPrice - Maximum price string
 * @returns Validation error or null if valid
 */
export function validatePriceRange(
  minPrice: string,
  maxPrice: string
): ValidationError | null {
  const min = parseFloat(minPrice);
  const max = parseFloat(maxPrice);

  // Only validate if both are valid numbers
  if (isNaN(min) || isNaN(max)) {
    return null; // Let other validators handle NaN cases
  }

  if (min > max) {
    return {
      field: 'maxPrice',
      message: 'Max price must be greater than or equal to min price',
    };
  }

  return null;
}

/**
 * Validates that current price is within min-max range
 * Checks that current price is between min and max price (inclusive)
 * @param currentPrice - Current price string
 * @param minPrice - Minimum price string
 * @param maxPrice - Maximum price string
 * @returns Validation error or null if valid
 */
export function validateCurrentPriceInRange(
  currentPrice: string,
  minPrice: string,
  maxPrice: string
): ValidationError | null {
  const current = parseFloat(currentPrice);
  const min = parseFloat(minPrice);
  const max = parseFloat(maxPrice);

  // Only validate if all are valid numbers
  if (isNaN(current) || isNaN(min) || isNaN(max)) {
    return null; // Let other validators handle NaN cases
  }

  if (current < min || current > max) {
    return {
      field: 'currentPrice',
      message: 'Current price must be between min and max price',
    };
  }

  return null;
}

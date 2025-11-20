package com.borsibaar.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.DecimalMin;
import java.math.BigDecimal;

public record OrganizationRequestDto(
        @NotBlank String name,
        @DecimalMin("0.00") BigDecimal priceIncreaseStep,
        @DecimalMin("0.00") BigDecimal priceDecreaseStep) {
}

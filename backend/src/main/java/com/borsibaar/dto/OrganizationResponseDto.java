package com.borsibaar.dto;

import java.time.OffsetDateTime;
import java.math.BigDecimal;

public record OrganizationResponseDto(
                Long id,
                String name,
                OffsetDateTime createdAt,
                OffsetDateTime updatedAt,
                BigDecimal priceIncreaseStep,
                BigDecimal priceDecreaseStep) {
}

package com.borsibaar.mapper;

import com.borsibaar.dto.OrganizationRequestDto;
import com.borsibaar.dto.OrganizationResponseDto;
import com.borsibaar.entity.Organization;
import org.mapstruct.BeanMapping;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;
import org.mapstruct.NullValuePropertyMappingStrategy;

@Mapper(componentModel = "spring")
public interface OrganizationMapper {

    @Mapping(target = "id", ignore = true)
    @Mapping(target = "createdAt", ignore = true) // set in service
    @Mapping(target = "updatedAt", ignore = true) // set in service
    @Mapping(target = "priceIncreaseStep", source = "priceIncreaseStep")
    @Mapping(target = "priceDecreaseStep", source = "priceDecreaseStep")
    Organization toEntity(OrganizationRequestDto request);

    OrganizationResponseDto toResponse(Organization organization);

    @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
    @Mapping(target = "id", ignore = true)
    @Mapping(target = "createdAt", ignore = true)
    @Mapping(target = "updatedAt", ignore = true)
    @Mapping(target = "priceIncreaseStep", source = "priceIncreaseStep")
    @Mapping(target = "priceDecreaseStep", source = "priceDecreaseStep")
    void updateEntity(@MappingTarget Organization target, OrganizationRequestDto source);
}

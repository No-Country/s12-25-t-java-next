package com.AlaCartApp.models.mapper;

import com.AlaCartApp.models.request.SubCategoryDto;
import org.mapstruct.InheritInverseConfiguration;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;

import java.util.List;

@Mapper(componentModel = "spring")
public interface SubCategoryMapper {
    @Mappings({
            @Mapping(source = "id", target = "id"),
            @Mapping(source = "name", target = "name"),
            @Mapping(source = "available", target = "available"),
    })
    SubCategoryDto toSubCategoryDTO(SubCategory subcategory);
    List<SubCategoryDto> toSubCategoriesDTO(List<SubCategory> subcategory);
    @InheritInverseConfiguration
    SubCategory toSubCategory(SubCategoryDto subcategoryDto);
}

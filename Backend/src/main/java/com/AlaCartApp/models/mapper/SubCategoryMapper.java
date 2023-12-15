package com.AlaCartApp.models.mapper;

import com.AlaCartApp.models.entity.SubCategory;
import com.AlaCartApp.models.request.SubCategoryDto;
import org.mapstruct.InheritInverseConfiguration;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(componentModel = "spring")
public interface SubCategoryMapper {

    @Mapping(source = "id", target = "id")
    @Mapping(source = "name", target = "name")
    @Mapping(source = "available", target = "available")
    @Mapping(source = "category", target = "category")
    SubCategoryDto toSubCategoryDTO(SubCategory subcategory);
    List<SubCategoryDto> toSubCategoriesDTO(List<SubCategory> subcategory);
    @InheritInverseConfiguration
    SubCategory toSubCategory(SubCategoryDto subcategoryDto);
}

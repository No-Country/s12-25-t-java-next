package com.AlaCartApp.models.mapper;

import com.AlaCartApp.models.entity.Category;
import com.AlaCartApp.models.request.CategoryDto;
import org.mapstruct.InheritInverseConfiguration;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;

import java.util.List;
@Mapper(componentModel = "spring")
public interface CategoryMapper {

    @Mappings({
            @Mapping(source = "id", target = "id"),
            @Mapping(source = "name", target = "name")
           // @Mapping(source = "available", target = "available")
    })
    CategoryDto toCategoryDTO(Category category);
    List<CategoryDto> toCategoriesDTO(List<Category> category);
    @InheritInverseConfiguration
    Category toCategory(CategoryDto categoryDto);
}

package com.AlaCartApp.models.request;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class CategoryDto {
    private Long id;
    private String name;
    private Boolean available;
    private List<SubCategoryDto> subCategories;
}

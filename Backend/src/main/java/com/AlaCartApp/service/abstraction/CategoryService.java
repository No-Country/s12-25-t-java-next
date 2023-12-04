package com.AlaCartApp.service.abstraction;

import com.AlaCartApp.models.request.CategoryDto;

import java.util.List;

public interface CategoryService {

    List<CategoryDto> findAll();
    List<CategoryDto> findAllUnAvailable();
    List<CategoryDto> findAllAvailable();

    CategoryDto findAvailableAndId(Long id);

    CategoryDto findByName(String name);

    CategoryDto makeAvailable(Long id);

    CategoryDto makeUnAvailable(Long id);

    CategoryDto changeName(String name, Long id);

    CategoryDto createCategory(CategoryDto categoryDto);
}

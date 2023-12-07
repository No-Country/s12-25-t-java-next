package com.AlaCartApp.service.abstraction;

import com.AlaCartApp.models.entity.SubCategory;
import com.AlaCartApp.models.request.SubCategoryDto;

import java.util.List;
import java.util.Optional;

public interface SubCategoryService {

    List<SubCategoryDto> findAll();
    List<SubCategoryDto> findAllUnAvailable();
    List<SubCategoryDto> findAllAvailable();

    SubCategoryDto findAvailableAndId(Long id);

    SubCategoryDto findByName(String name);

    SubCategoryDto makeAvailable(Long id);

    SubCategoryDto makeUnAvailable(Long id);

    SubCategoryDto changeName(String name, Long id);

    SubCategoryDto createSubCategory(SubCategoryDto categoryDto);
}

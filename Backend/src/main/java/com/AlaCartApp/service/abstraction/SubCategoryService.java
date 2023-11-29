package com.AlaCartApp.service.abstraction;

import com.AlaCartApp.models.entity.SubCategory;

import java.util.List;
import java.util.Optional;

public interface SubCategoryService {

    List<SubCategory> findAllAvailable();

    Optional<SubCategory> findAvailableAndId(Long id);

    Optional<SubCategory> findByName(String name);

    Optional<SubCategory> makeAvailable(Long id);

    Optional<SubCategory> makeUnAvailable(Long id);
}

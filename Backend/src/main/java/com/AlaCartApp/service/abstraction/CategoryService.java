package com.AlaCartApp.service.abstraction;

import com.AlaCartApp.models.entity.Category;

import java.util.List;
import java.util.Optional;

public interface CategoryService {

    List<Category> findAllAvailable();

    Optional<Category> findAvailableAndId(Long id);

    Optional<Category> findByName(String name);

    Optional<Category> makeAvailable(Long id);

    Optional<Category> makeUnAvailable(Long id);

}

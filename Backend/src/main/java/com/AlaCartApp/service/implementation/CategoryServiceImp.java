package com.AlaCartApp.service.implementation;

import com.AlaCartApp.models.entity.Category;
import com.AlaCartApp.repository.CategoryRepository;
import com.AlaCartApp.service.abstraction.CategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CategoryServiceImp implements CategoryService {

    private CategoryRepository categoryRepository;

    @Override
    public List<Category> findAllAvailable() {
        return categoryRepository.findAllAvailable();
    }

    @Override
    public Optional<Category> findAvailableAndId(Long id) {
        return categoryRepository.findAvailableAndId(id);
    }

    @Override
    public Optional<Category> findByName(String name) {
        return categoryRepository.findByName(name);
    }

    @Override
    public Optional<Category> makeAvailable(Long id) {
        return categoryRepository.makeAvailable(id);
    }

    @Override
    public Optional<Category> makeUnAvailable(Long id) {
        return categoryRepository.makeUnAvailable(id);
    }
}

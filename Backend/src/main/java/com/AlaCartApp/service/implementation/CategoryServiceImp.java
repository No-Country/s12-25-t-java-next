package com.AlaCartApp.service.implementation;

import com.AlaCartApp.models.mapper.CategoryMapper;
import com.AlaCartApp.models.request.CategoryDto;
import com.AlaCartApp.repository.CategoryRepository;
import com.AlaCartApp.service.abstraction.CategoryService;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CategoryServiceImp implements CategoryService {

    private final CategoryRepository categoryRepository;

    private final CategoryMapper categoryMapper;

    @Override
    public List<CategoryDto> findAll() {
        return categoryMapper.toCategoriesDTO(categoryRepository.findAll());
    }

    @Override
    public List<CategoryDto> findAllUnAvailable() {
        return categoryMapper.toCategoriesDTO(categoryRepository.findAllUnAvailable());
    }

    @Override
    public List<CategoryDto> findAllAvailable() {
        return categoryMapper.toCategoriesDTO(categoryRepository.findAllAvailable());
    }

    @Override
    public CategoryDto findAvailableAndId(Long id) {
        return categoryMapper.toCategoryDTO(categoryRepository.findAvailableAndId(id).orElse(null));
    }

    @Override
    public CategoryDto findByName(String name) {
        return categoryMapper.toCategoryDTO(categoryRepository.findByName(name).orElse(null));
    }

    @Transactional
    @Override
    public CategoryDto makeAvailable(Long id) {
        return categoryMapper.toCategoryDTO(categoryRepository.makeAvailable(id).orElse(null));
    }

    @Transactional
    @Override
    public CategoryDto makeUnAvailable(Long id) {
        return categoryMapper.toCategoryDTO(categoryRepository.makeUnAvailable(id).orElse(null));
    }

    @Transactional
    @Override
    public CategoryDto changeName(String name, Long id) {
        return categoryMapper.toCategoryDTO(categoryRepository.changeName(name,id).orElse(null));
    }

    @Transactional
    @Override
    public CategoryDto createCategory(CategoryDto categoryDto) {
        if (categoryDto != null) return categoryMapper.toCategoryDTO(categoryRepository.save(categoryMapper.toCategory(categoryDto)));
        return null;
    }


}

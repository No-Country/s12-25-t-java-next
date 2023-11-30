package com.AlaCartApp.service.implementation;

import com.AlaCartApp.models.entity.SubCategory;
import com.AlaCartApp.repository.SubCategoryRepository;
import com.AlaCartApp.service.abstraction.SubCategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class SubCategoryServiceImp implements SubCategoryService {

    private SubCategoryRepository subCategoryRepository;

    @Override
    public List<SubCategory> findAllAvailable() {
        return subCategoryRepository.findAllAvailable();
    }

    @Override
    public Optional<SubCategory> findAvailableAndId(Long id) {
        return subCategoryRepository.findAvailableAndId(id);
    }

    @Override
    public Optional<SubCategory> findByName(String name) {
        return subCategoryRepository.findByName(name);
    }

    @Override
    public Optional<SubCategory> makeAvailable(Long id) {
        return subCategoryRepository.makeAvailable(id);
    }

    @Override
    public Optional<SubCategory> makeUnAvailable(Long id) {
        return subCategoryRepository.makeUnAvailable(id);
    }
}

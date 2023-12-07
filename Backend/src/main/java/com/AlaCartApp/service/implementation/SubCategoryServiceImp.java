package com.AlaCartApp.service.implementation;

import com.AlaCartApp.models.mapper.SubCategoryMapper;
import com.AlaCartApp.models.request.SubCategoryDto;
import com.AlaCartApp.repository.SubCategoryRepository;
import com.AlaCartApp.service.abstraction.SubCategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class SubCategoryServiceImp implements SubCategoryService {

    private final SubCategoryRepository subCategoryRepository;

    private final SubCategoryMapper subCategoryMapper;

    public List<SubCategoryDto> findAll(){
        return subCategoryMapper.toSubCategoriesDTO(subCategoryRepository.findAll());
    }
    @Override
    public List<SubCategoryDto> findAllUnAvailable() {
        return subCategoryMapper.toSubCategoriesDTO(subCategoryRepository.findAllUnAvailable());
    }

    @Override
    public List<SubCategoryDto> findAllAvailable() {
        return subCategoryMapper.toSubCategoriesDTO(subCategoryRepository.findAllAvailable());
    }

    @Override
    public SubCategoryDto findAvailableAndId(Long id) {
        return subCategoryMapper.toSubCategoryDTO(subCategoryRepository.findAvailableAndId(id).orElse(null));
    }

    @Override
    public SubCategoryDto findByName(String name) {
        return subCategoryMapper.toSubCategoryDTO(subCategoryRepository.findByName(name).orElse(null));
    }

    @Override
    public SubCategoryDto makeAvailable(Long id) {
        return subCategoryMapper.toSubCategoryDTO(subCategoryRepository.makeAvailable(id).orElse(null));
    }

    @Override
    public SubCategoryDto makeUnAvailable(Long id) {
        return subCategoryMapper.toSubCategoryDTO(subCategoryRepository.makeUnAvailable(id).orElse(null));
    }

    @Override
    public SubCategoryDto changeName(String name, Long id) {
        return subCategoryMapper.toSubCategoryDTO(subCategoryRepository.changeName(name,id).orElse(null));
    }

    @Override
    public SubCategoryDto createSubCategory(SubCategoryDto categoryDto) {
        if (categoryDto != null) return subCategoryMapper.toSubCategoryDTO(subCategoryRepository.save(subCategoryMapper.toSubCategory(categoryDto)));
        return null;
    }
}

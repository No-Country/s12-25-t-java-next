package com.AlaCartApp.service.implementation;

import com.AlaCartApp.exception.ResourceNotFoundException;
import com.AlaCartApp.models.entity.Product;
import com.AlaCartApp.models.mapper.ProductMapper;
import com.AlaCartApp.models.response.ProductDto;
import com.AlaCartApp.repository.ProductRepository;
import com.AlaCartApp.service.abstraction.ImageService;
import com.AlaCartApp.service.abstraction.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;
@RequiredArgsConstructor
@Service
public class ProductServiceImpl implements ProductService {

    private final ImageService imageService;
    private final ProductRepository productRepository;
    private final ProductMapper productMapper;

    @Override
    public ProductDto save(List<MultipartFile> postImages, ProductDto request) throws IOException {
        request.setImages(imageService.imagesPost(postImages));
        Product product = productRepository.save(productMapper.toProduct(request));
        return productMapper.toProductDTO(product);
    }

    @Override
    public List<ProductDto> findAll() {

        return productMapper.toProductsDTO(productRepository.findAll());
    }

    @Override
    public Optional<ProductDto> update(List<MultipartFile> postImages,ProductDto request) throws IOException {
        if(productRepository.existsById(request.getId())){
            if(postImages != null){
                request.setImages(imageService.imagesPost(postImages));
            }
            return  Optional.of(productMapper.toProductDTO(productRepository
                    .save(productMapper.toProduct(request))));
        }else{
            throw new ResourceNotFoundException("Product not found with id: " + request.getId());
        }
    }

    @Override
    public Optional<ProductDto> findById(Long id) {

        return Optional.ofNullable(productRepository.findById(id).map(productMapper::toProductDTO)
                .orElseThrow(() -> new ResourceNotFoundException("Product not found with id: " + id)));

    }

    @Override
    public boolean delete(Long id) {
        if(productRepository.findById(id).isEmpty())
            return false;
        productRepository.deleteById(id);
        return true;
    }
}

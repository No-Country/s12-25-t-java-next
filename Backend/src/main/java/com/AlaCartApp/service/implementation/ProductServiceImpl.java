package com.AlaCartApp.service.implementation;

import com.AlaCartApp.exception.ResourceNotFoundException;
import com.AlaCartApp.models.entity.Product;
import com.AlaCartApp.models.mapper.ProductMapper;
import com.AlaCartApp.models.response.ProductDto;
import com.AlaCartApp.models.request.ProductDtoRequest;
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
    public ProductDto update(Long id, ProductDto request) {
        Optional<Product> existingProduct = productRepository.findById(id);
        if(existingProduct.isPresent()){
            Product product = existingProduct.get();
            product.setName(request.getName());
            product.setPrice(request.getPrice());
            product.setDescription(request.getDescription());
            product.setCategory(request.getCategory());
            return productMapper.toProductDTO(productRepository.save(product));
        }else{
            throw new ResourceNotFoundException("Product not found with id: " + id);
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

package com.AlaCartApp.service.implementation;

import com.AlaCartApp.exception.ResourceNotFoundException;
import com.AlaCartApp.models.entity.Product;
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

    @Override
    public Product save(List<MultipartFile> postImages, Product request) throws IOException {
        request.setImages(imageService.imagesPost(postImages));
        return productRepository.save(request);
    }

    @Override
    public List<Product> findAll() {

        return productRepository.findAll();
    }

    @Override
    public Product update(Long id, Product request) {
        Optional<Product> existingProduct = productRepository.findById(id);
        if(existingProduct.isPresent()){
            Product product = existingProduct.get();
            product.setName(request.getName());
            product.setPrice(request.getPrice());
            product.setDescription(request.getDescription());
            return productRepository.save(product);
        }else{
            throw new ResourceNotFoundException("Product not found with id: " + id);
        }
    }

    @Override
    public Optional<Product> findById(Long id) {

        return Optional.ofNullable(productRepository.findById(id)
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

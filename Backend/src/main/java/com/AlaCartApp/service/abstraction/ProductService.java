package com.AlaCartApp.service.abstraction;

import com.AlaCartApp.models.request.CategoryDto;
import com.AlaCartApp.models.response.ProductDto;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

public interface ProductService {

    ProductDto save(List<MultipartFile> postImages, ProductDto request) throws IOException;
    List<ProductDto> findAll();

    Optional<ProductDto> update(ProductDto request);
    Optional<ProductDto> findById(Long id);

    boolean delete(Long id);
}

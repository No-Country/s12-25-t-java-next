package com.AlaCartApp.service.abstraction;

import com.AlaCartApp.models.response.ProductDtoResponse;
import com.AlaCartApp.models.request.ProductDtoRequest;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

public interface ProductService {

    ProductDtoResponse save(List<MultipartFile> postImages, ProductDtoRequest request) throws IOException;
    List<ProductDtoResponse> findAll();

    ProductDtoResponse update(Long id, ProductDtoResponse request);
    Optional<ProductDtoResponse> findById(Long id);

    boolean delete(Long id);
}

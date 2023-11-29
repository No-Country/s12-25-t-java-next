package com.AlaCartApp.service.abstraction;

import com.AlaCartApp.models.entity.Product;
import com.AlaCartApp.models.request.ProductDto;
import com.AlaCartApp.repository.ProductRepository;
import org.springframework.web.multipart.MultipartFile;

import javax.sound.sampled.Port;
import java.io.IOException;
import java.util.List;
import java.util.Optional;

public interface ProductService {

    Product save(List<MultipartFile> postImages,Product request) throws IOException;
    List<Product> findAll();

    Product update(Long id, Product request);
    Optional<Product> findById(Long id);

    boolean delete(Long id);
}

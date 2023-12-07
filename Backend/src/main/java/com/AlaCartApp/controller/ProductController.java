package com.AlaCartApp.controller;

import com.AlaCartApp.models.response.ProductDto;
import com.AlaCartApp.service.abstraction.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import java.io.IOException;
import java.util.List;

@RequiredArgsConstructor
@RequestMapping("/v1/products")
@RestController
public class ProductController {

    private final ProductService productService;

    @GetMapping
    public ResponseEntity<List<ProductDto>> findAll(){
        return ResponseEntity.ok(productService.findAll());
    }

    @PostMapping
    public ResponseEntity<Void> save(
            @RequestPart(value="files",required = false) List<MultipartFile> postImage,
            @RequestPart(value="request") ProductDto request)
            throws IOException{
        productService.save(postImage, request);
        return ResponseEntity.status(HttpStatus.CREATED)
                .build();
    }

    @GetMapping("/{id}")
    public ResponseEntity<ProductDto> findById(@PathVariable Long id){
        return ResponseEntity.of(productService.findById(id));
    }

    @PutMapping()
    public ResponseEntity<ProductDto> update(@RequestBody ProductDto product){
       return ResponseEntity.of(productService.update(product));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Boolean> delete(@PathVariable Long id){
        return new ResponseEntity<>(productService.delete(id)?HttpStatus.OK:HttpStatus.NOT_FOUND);
    }
}

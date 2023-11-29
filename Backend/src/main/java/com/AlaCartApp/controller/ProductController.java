package com.AlaCartApp.controller;

import com.AlaCartApp.models.entity.Product;
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
    public ResponseEntity<List<Product>> findAll(){
        return ResponseEntity.ok(productService.findAll());
    }

    @PostMapping
    public ResponseEntity<Product> save(
            @RequestPart(value="files",required = false) List<MultipartFile> postImage,
            @RequestPart(value="request") Product request)
            throws IOException{
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(productService.save(postImage, request));
    }
    @GetMapping("/{id}")
    public ResponseEntity<Product> findById(@PathVariable Long id){
        return ResponseEntity.of(productService.findById(id));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Product> update(@PathVariable Long id , @RequestBody Product product){
        Product response = productService.update(id,product);
        return new ResponseEntity<>(response,HttpStatus.OK);
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<Boolean> delete(@PathVariable Long id){
        return new ResponseEntity<>(productService.delete(id)?HttpStatus.OK:HttpStatus.NOT_FOUND);
    }
}

package com.AlaCartApp.repository;

import com.AlaCartApp.models.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends JpaRepository<Product,Long> {
    
    Product findByName(String productName);
}

package com.AlaCartApp.repository;

import com.AlaCartApp.models.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product,Long> {
    
    Product findByName(String productName);

    @Query("SELECT p FROM Product p WHERE p.id = :id AND p.state = true")
    List<Product> findByCategory(@Param("id") Long categoryId);
}

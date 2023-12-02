package com.AlaCartApp.repository;
import com.AlaCartApp.models.entity.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> {

    @Query("SELECT c FROM Category c WHERE c.available = true")
    List<Category> findAllAvailable();

    @Query("SELECT c FROM Category c WHERE c.available = true AND c.id = :id")
    Optional<Category> findAvailableAndId(@Param("id") Long id);

    @Query("SELECT c FROM Category c WHERE c.available = true AND c.name = :name")
    Optional<Category> findByName(@Param("name") String name);

    @Query("UPDATE Category c SET c.available = true WHERE c.id = :id")
    Optional<Category> makeAvailable(@Param("id") Long id);

    @Query("UPDATE Category c SET c.available = false WHERE c.id = :id")
    Optional<Category> makeUnAvailable(@Param("id") Long id);

}

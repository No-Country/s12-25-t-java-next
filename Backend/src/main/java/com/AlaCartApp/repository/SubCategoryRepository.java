package com.AlaCartApp.repository;

import com.AlaCartApp.models.entity.Category;
import com.AlaCartApp.models.entity.SubCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface SubCategoryRepository extends JpaRepository<SubCategory, Long> {

    @Query("SELECT s FROM SubCategory s WHERE s.available = true")
    List<SubCategory> findAllAvailable();

    @Query("SELECT s FROM SubCategory s WHERE s.available = true AND s.id = :id")
    Optional<SubCategory> findAvailableAndId(@Param("id") Long id);

    @Query("SELECT s FROM SubCategory s WHERE s.available = true AND s.name = :name")
    Optional<Category> findByName(@Param("name") String name);

    @Query("UPDATE SubCategory s SET s.available = true WHERE s.id = :id")
    Optional<Category> makeAvailable(@Param("id") Long id);

    @Query("UPDATE SubCategory s SET s.available = false WHERE s.id = :id")
    Optional<Category> makeUnAvailable(@Param("id") Long id);
}

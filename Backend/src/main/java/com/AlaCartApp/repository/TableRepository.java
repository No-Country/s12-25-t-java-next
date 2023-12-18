package com.AlaCartApp.repository;

import com.AlaCartApp.models.entity.TableEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TableRepository extends JpaRepository<TableEntity, Long> {

    TableEntity findByNumber(Integer number);
}

package com.AlaCartApp.service.abstraction;

import com.AlaCartApp.models.entity.TableEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public interface TableService {

    Optional<TableEntity> create (TableEntity tableEntity);

    Optional<TableEntity> update (TableEntity tableEntity);

    Optional<List<TableEntity>> tableList();

    Optional<TableEntity> tableId (Long id);

    void delete (Long id);
}

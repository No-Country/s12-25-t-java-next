package com.AlaCartApp.service.implementation;

import com.AlaCartApp.models.entity.TableEntity;
import com.AlaCartApp.repository.TableRepository;
import com.AlaCartApp.service.abstraction.TableService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class TableServiceImp implements TableService {

    @Autowired
    private TableRepository tableRepository;
    @Override
    public Optional<TableEntity> create(TableEntity tableEntity) {
        return Optional.of(tableRepository.save(tableEntity));
    }

    @Override
    public Optional<TableEntity> update(TableEntity tableEntity) {
        return Optional.of(tableRepository.save(tableEntity));
    }

    @Override
    public Optional<List<TableEntity>> tableList() {
        return Optional.of(tableRepository.findAll());
    }

    @Override
    public Optional<TableEntity> tableId(Long id) {
        return (tableRepository.findById(id));
    }

    @Override
    public void delete(Long id) {
        tableRepository.deleteById(id);
    }
}

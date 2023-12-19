package com.AlaCartApp.service.implementation;

import com.AlaCartApp.models.entity.TableEntity;
import com.AlaCartApp.models.mapper.TableEntityMapper;
import com.AlaCartApp.models.request.TableEntityDto;
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

    @Autowired
    private final TableEntityMapper tableMapper;

    @Override
    public Optional<TableEntityDto> create(TableEntityDto tableEntityDto) {
        return Optional.of(tableMapper.toTableEntityDTO(tableRepository
                .save(tableMapper.toTableEntity(tableEntityDto))));
    }

    @Override
    public Optional<TableEntityDto> update(TableEntityDto tableEntityDto) {
        if(tableRepository.existsById(tableEntityDto.getId())){
            return Optional.of(tableMapper.toTableEntityDTO(tableRepository
                    .save(tableMapper.toTableEntity(tableEntityDto))));
        }
        return Optional.of(new TableEntityDto());
    }

    @Override
    public Optional<List<TableEntityDto>> tableList() {
        return Optional.of(tableMapper.toTableEntitiesDTO(tableRepository.findAll()));
    }

    @Override
    public Optional<TableEntityDto> tableId(Long id) {
        return tableRepository.findById(id).map(tableMapper::toTableEntityDTO);
    }

    @Override
    public void delete(Long id) {
        tableRepository.deleteById(id);
    }

    @Override
    public boolean isTableNumberDuplicate(Integer number) {

        // Implementa la lógica para verificar si el nombre está duplicado en la base de datos
        // Puedes usar el repositorio (repository) para realizar la consulta
        // Retorna true si el nombre está duplicado, false en caso contrario
        TableEntity existingTableNumber =tableRepository.findByNumber(number);
        return existingTableNumber != null;
    }
}

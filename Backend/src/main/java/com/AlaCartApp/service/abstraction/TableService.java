package com.AlaCartApp.service.abstraction;

import com.AlaCartApp.models.request.TableEntityDto;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public interface TableService {

    Optional<TableEntityDto> create (TableEntityDto tableEntityDto);

    Optional<TableEntityDto> update (TableEntityDto tableEntityDto);

    Optional<List<TableEntityDto>> tableList();

    Optional<TableEntityDto> tableId (Long id);

    void delete (Long id);

    boolean isTableIdDuplicate(Long id);
}

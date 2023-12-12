package com.AlaCartApp.models.mapper;

import com.AlaCartApp.models.entity.TableEntity;
import com.AlaCartApp.models.request.TableEntityDto;
import org.mapstruct.InheritInverseConfiguration;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;

import java.util.List;
@Mapper(componentModel = "spring")
public interface TableEntityMapper {

    @Mapping(source = "id", target = "id")
    @Mapping(source = "number", target = "number")
    @Mapping(source = "capacity", target = "capacity")
    @Mapping(source = "state", target = "state")

    TableEntityDto toTableEntityDTO(TableEntity tableEntity);
    List<TableEntityDto> toTableEntitiesDTO(List<TableEntity> entities);
    @InheritInverseConfiguration
    TableEntity toTableEntity(TableEntityDto tableEntityDtoDto);
}







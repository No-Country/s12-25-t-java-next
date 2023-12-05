package com.AlaCartApp.models.mapper;

import com.AlaCartApp.models.entity.Qualification;
import com.AlaCartApp.models.request.QualificationDto;
import org.mapstruct.InheritInverseConfiguration;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import java.util.List;

@Mapper(componentModel = "spring")
public interface QualificationMapper {
    @Mapping(source = "id", target = "id")
    @Mapping(source = "score", target = "score")
    @Mapping(source = "product", target = "product")

    QualificationDto toQualificationDTO(Qualification qualification);
    List<QualificationDto> toQualificationsDTO(List<Qualification> qualification);
    @InheritInverseConfiguration
    Qualification toQualification(QualificationDto qualificationDto);





}

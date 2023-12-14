package com.AlaCartApp.models.mapper;

import com.AlaCartApp.models.entity.OrderDetail;
import com.AlaCartApp.models.request.OrderDetailDto;
import com.AlaCartApp.repository.OrderDetailRepository;
import org.mapstruct.InheritInverseConfiguration;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingConstants;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

@Mapper(componentModel = MappingConstants.ComponentModel.SPRING)
public interface OrderDetailMapper {

    OrderDetailDto toOrderDetailDTO(OrderDetail orderDetail);

    List<OrderDetailDto> toOrderDetailsDTO(List <OrderDetail> orderDetails);

    @InheritInverseConfiguration
    OrderDetail toOrderDetail(OrderDetailDto orderDetailDto);

    List<OrderDetail> toOrderDetails(List<OrderDetailDto> orderDetailsDto);
}

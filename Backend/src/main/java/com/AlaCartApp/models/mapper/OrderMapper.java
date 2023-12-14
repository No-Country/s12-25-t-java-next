package com.AlaCartApp.models.mapper;

import com.AlaCartApp.models.entity.Order;
import com.AlaCartApp.models.request.OrderDto;
import org.mapstruct.InheritInverseConfiguration;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingConstants;

import java.util.List;

@Mapper(componentModel = MappingConstants.ComponentModel.SPRING, uses = {OrderDetailMapper.class})
public interface OrderMapper {


        OrderDto toOrderDTO(Order order);
        List<OrderDto> toOrdersDTO(List<Order> orderList);

        @InheritInverseConfiguration
        Order toOrder(OrderDto orderDto);

        List<Order> toOrders(List<OrderDto> orderDtoList);
}

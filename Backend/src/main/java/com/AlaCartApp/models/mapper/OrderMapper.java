package com.AlaCartApp.models.mapper;

import com.AlaCartApp.models.entity.Order;
import com.AlaCartApp.models.request.OrderDto;
import org.mapstruct.InheritInverseConfiguration;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import java.util.List;

@Mapper(componentModel = "spring")
public interface OrderMapper {

//        @Mapping(source = "id" , target = "id")
//        @Mapping(source = "tableEntity" , target = "tableEntity")
//        @Mapping(source = "date", target = "date")
//        @Mapping(source = "detail", target = "detail")
//        @Mapping(source = "paymentMethod", target = "paymentMethod")
//        @Mapping(source = "total", target = "total")
//       // @Mapping(source = "state", target = "state")
//
//        OrderDto toOrderDTO (Order order);
//        List<OrderDto> toOrdersDTO (List <Order> order);
//        @InheritInverseConfiguration
//
//        Order toOrder (OrderDto orderDto);
}

package com.AlaCartApp.models.mapper;

import com.AlaCartApp.models.entity.OrderDetail;
import com.AlaCartApp.models.request.OrderDetailDto;
import org.mapstruct.InheritInverseConfiguration;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import java.util.List;

@Mapper(componentModel = "spring")
public interface OrderDetailMapper {

    @Mapping(source = "id" , target = "id")
    @Mapping(source = "order" , target = "order")
    @Mapping(source = "product" , target = "product")
    @Mapping(source = "quantity" , target = "quantity")
    @Mapping(source = "price" , target = "price")

    OrderDetailDto toOrderDetailDTO (OrderDetail orderDetail);
    List<OrderDetailDto> toOrderDetailsDTO (List <OrderDetail> orderDetail);
    @InheritInverseConfiguration
    OrderDetail toOrderDetail (OrderDetailDto orderDetailDto);
}

package com.AlaCartApp.service.abstraction;

import com.AlaCartApp.models.entity.Order;
import com.AlaCartApp.models.request.OrderDto;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface OrderService {
    List<OrderDto> findAll();

    OrderDto create(OrderDto orderDto);

    OrderDto update(Long id, OrderDto orderDto);

    void delete(Long id);

    OrderDto find(Long id);
}

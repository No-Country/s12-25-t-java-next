package com.AlaCartApp.service.abstraction;

import com.AlaCartApp.models.entity.Order;
import com.AlaCartApp.models.request.OrderDto;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface OrderService {
    List<OrderDto> findAll();

    Order create(OrderDto orderDto);

    Order update(Long id, Order order);

    void delete(Long id);

    Order find(Long id);
}

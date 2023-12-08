package com.AlaCartApp.service.abstraction;

import com.AlaCartApp.models.entity.Order;
import jakarta.persistence.Table;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface OrderService {
    List<Order> findAll();

    Order create(Order order);

    Order update(Long id, Order order);

    void delete(Long id);

    Order find(Long id);


}

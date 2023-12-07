package com.AlaCartApp.service.implementation;

import com.AlaCartApp.exception.ResourceNotFoundException;
import com.AlaCartApp.models.entity.Order;
import com.AlaCartApp.models.entity.Product;
import com.AlaCartApp.repository.OrderRepository;
import com.AlaCartApp.service.abstraction.OrderService;
import jakarta.persistence.Table;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class OrderServiceImpl implements OrderService {

    @Autowired
    private OrderRepository orderRepository;

    @Override
    public List<Order> findAll() {
        return orderRepository.findAll();
    }

    @Override
    public Order create(Order order) {
        order.setDate(LocalDateTime.now());
        order.setUpdated(LocalDateTime.now());
        return orderRepository.save(order);
    }

    @Override
    public Order update(Long id, Order order) {
        Optional<Order> orderSaved = orderRepository.findById(id);
        if(orderSaved.isPresent()){
            Order updateOrder = orderSaved.get();
            updateOrder.setState(order.getState());
            updateOrder.setTotal(order.getTotal());
            updateOrder.setPaymentMethod(order.getPaymentMethod());
            updateOrder.setTableEntity(order.getTableEntity());
            updateOrder.setDetail(order.getDetail());
            updateOrder.setUpdated(LocalDateTime.now());
            return orderRepository.save(updateOrder);
        }else{
            throw new ResourceNotFoundException("Order not found with id: " + id);
        }
    }

    @Override
    public void delete(Long id) {
        Optional<Order> orderSaved = orderRepository.findById(id);
        if(orderSaved.isPresent()){
            orderRepository.deleteById(id);
        }else{
            throw new ResourceNotFoundException("Order not found with id: " + id);
        }
    }

    @Override
    public Order find(Long id) {
        Optional<Order> orderSaved = orderRepository.findById(id);
        if(orderSaved.isPresent()){
            return orderSaved.get();
        }else{
            throw new ResourceNotFoundException("Order not found with id: " + id);
        }
    }

}

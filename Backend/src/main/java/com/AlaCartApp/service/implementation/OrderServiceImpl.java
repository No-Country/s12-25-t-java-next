package com.AlaCartApp.service.implementation;

import com.AlaCartApp.enums.State;
import com.AlaCartApp.exception.ResourceNotFoundException;
import com.AlaCartApp.models.entity.Order;
import com.AlaCartApp.models.entity.OrderDetail;
import com.AlaCartApp.models.entity.Product;
import com.AlaCartApp.models.mapper.OrderMapper;
import com.AlaCartApp.models.request.OrderDetailDto;
import com.AlaCartApp.models.request.OrderDto;
import com.AlaCartApp.repository.OrderDetailRepository;
import com.AlaCartApp.repository.OrderRepository;
import com.AlaCartApp.repository.ProductRepository;
import com.AlaCartApp.repository.TableRepository;
import com.AlaCartApp.service.abstraction.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class OrderServiceImpl implements OrderService {

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private TableRepository tableRepository;

    @Autowired
    private OrderDetailRepository orderDetailRepository;

    @Autowired
    private OrderMapper orderMapper;

    @Override
    public List<OrderDto> findAll() {
        return orderMapper.toOrdersDTO(orderRepository.findAll());
    }

    @Override
    public Order create(OrderDto orderDto) {
        orderDto.setDate(LocalDateTime.now());
        List<OrderDetail> listOrderDetail = new ArrayList<>();
        listOrderDetail = orderDto.getDetail();
        Double total = 0D;
        for(OrderDetail orderDetail: listOrderDetail){
            Double price = productRepository.findById(orderDetail.getProduct().getId()).get().getPrice();
            orderDetail.setPrice(price);
            total += orderDetail.getPrice()*orderDetail.getQuantity();
        }
        orderDto.setTotal(total);
        orderDto.setDetail(null);
        orderDto.setState(State.INIT);
        Order order = orderRepository.save(orderMapper.toOrder(orderDto));
        listOrderDetail.forEach(orderDetail -> orderDetail.setOrder(order));
        listOrderDetail.forEach(orderDetail -> orderDetailRepository.save(orderDetail));
        return orderRepository.findById(order.getId()).get();
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

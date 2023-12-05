package com.AlaCartApp.models.request;

import com.AlaCartApp.models.entity.Order;
import com.AlaCartApp.models.entity.Product;
import lombok.Data;

@Data
public class OrderDetailDto {
    private Long id;
    private Order order;
    private Product product;
    private Integer quantity;
    private Double price;
}

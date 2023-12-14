package com.AlaCartApp.models.request;

import com.AlaCartApp.models.entity.Order;
import com.AlaCartApp.models.entity.Product;
import lombok.Data;
import software.amazon.awssdk.annotations.NotNull;

@Data
public class OrderDetailDto {
    private Long id;
    private Order order;
    @NotNull
    private Product product;
    @NotNull
    private Integer quantity;
    private Double price;
}

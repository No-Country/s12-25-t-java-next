package com.AlaCartApp.models.request;

import com.AlaCartApp.models.entity.Product;
import jakarta.persistence.*;
import lombok.Data;

@Data
public class QualificationDto {

    private Long id;
    private int score;
    private Product product;

}

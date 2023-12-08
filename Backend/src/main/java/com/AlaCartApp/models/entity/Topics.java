package com.AlaCartApp.models.entity;

import jakarta.persistence.ManyToOne;

public class Topics {

    @ManyToOne
    Product product;
}

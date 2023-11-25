package com.AlaCartApp.models.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "products")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;
    @Column(name = "nombre", nullable = false)
    private String name;
    @Column(name = "precio", nullable = false)
    private Double prece;
    @JoinColumn(name = "category_id", referencedColumnName = "id")
    @ManyToOne(fetch = FetchType.LAZY)
    private Category category;
    @Column(name = "description")
    private String description;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "combo_id", referencedColumnName = "id")
    private Combo combo;
}

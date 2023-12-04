package com.AlaCartApp.models.entity;

import jakarta.persistence.*;
import lombok.Data;
import java.util.List;

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
    private Double price;
    @ManyToOne()
    @JoinColumn(name = "category_id", referencedColumnName = "id")
    private Category category;
    @Column(name = "description", nullable = false)
    private String description;
    @Column(name = "estado" , nullable = false)
    private Boolean state;
    //  @ManyToOne(fetch = FetchType.LAZY)
    //  @JoinColumn(name = "combo_id", referencedColumnName = "id")
    //  private Combo combo;
    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY, orphanRemoval = true)
    @JoinColumn(name="product_id")
    private List<Image> images;
    //  @ManyToOne(fetch = FetchType.LAZY)
    //  @JoinColumn(name = "combo_id", referencedColumnName = "id")
    //  private Qualification qualification;
    private SubCategory subCategory;

}

package com.AlaCartApp.models.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "table_entity")
public class TableEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;
    @Column(name = "number", nullable = false)
    private Integer number;
    @Column(name = "capacity", nullable = false)
    private Integer capacity;
//    @OneToOne(fetch = FetchType.LAZY)
//    @JoinColumn(name = "state", referencedColumnName = "id")
//    private State state;

}

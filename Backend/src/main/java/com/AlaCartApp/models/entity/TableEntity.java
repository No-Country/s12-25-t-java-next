package com.AlaCartApp.models.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import jakarta.validation.constraints.NotNull;
@Getter
@Setter
@Entity
@Table(name = "table_entity")
public class TableEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    private Integer number;

    @NotNull
    private Integer capacity;

    private Boolean state;

    // Necesito que esta entidad esté creada.
    @OneToOne
    @JoinColumn(name = "user_id")
    private User user;


//  @OneToOne(fetch = FetchType.LAZY)
//  @JoinColumn(name = "state", referencedColumnName = "id")

}

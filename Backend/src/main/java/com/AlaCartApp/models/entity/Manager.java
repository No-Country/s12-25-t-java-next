package com.AlaCartApp.models.entity;

import com.AlaCartApp.enums.RoleAdmin;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "manager")
public class Manager {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;
    @Column(name = "name")
    private String name;
    @Column(name = "password")
    private String password;
    @Enumerated(EnumType.STRING)
    private RoleAdmin roleAdmin;




}

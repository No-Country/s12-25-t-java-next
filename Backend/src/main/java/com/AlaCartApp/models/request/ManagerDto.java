package com.AlaCartApp.models.request;

import lombok.Data;

@Data
public class ManagerDto {

    private Long id;
    private String name;
    private String password;
    private RoleAdmin roleAdmin;
}

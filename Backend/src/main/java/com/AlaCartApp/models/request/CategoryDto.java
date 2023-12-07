package com.AlaCartApp.models.request;

import lombok.Getter;
import lombok.Setter;
@Getter
@Setter
public class CategoryDto {
    private Long id;
    private String name;
    private Boolean available;
}

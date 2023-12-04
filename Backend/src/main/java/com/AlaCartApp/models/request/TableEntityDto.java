package com.AlaCartApp.models.request;

import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class TableEntityDto {

    private Long id;

    @NotNull
    private Integer number;

    @NotNull
    private Integer capacity;

    private Boolean state;

}

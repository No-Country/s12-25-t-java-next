package com.AlaCartApp.models.request;

import jakarta.validation.constraints.NotNull;
import lombok.Data;
import java.util.Date;

@Data
public class UserDto {


    private Long id;
    @NotNull
    String name;
    String email;
    @NotNull
    String password;
    @NotNull
    String lastName;
    Boolean state;
    Date startDate;

    //private Role role;
}

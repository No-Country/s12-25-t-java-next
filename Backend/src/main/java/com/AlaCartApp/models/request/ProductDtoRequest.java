package com.AlaCartApp.models.request;

import com.AlaCartApp.models.entity.Image;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter @Setter
public class ProductDtoRequest {

    String name;

    Double price;

    Long idCategory;

    String description;

    Boolean state;

    List<Image> images;

}

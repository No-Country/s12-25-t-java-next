package com.AlaCartApp.models.response;

import com.AlaCartApp.models.entity.Category;
import com.AlaCartApp.models.entity.Image;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter @Setter
public class ProductDtoResponse {

    Long id;

    String name;

    Double price;

    Category category;

    String description;

    Boolean state;

    List<Image> images;

}

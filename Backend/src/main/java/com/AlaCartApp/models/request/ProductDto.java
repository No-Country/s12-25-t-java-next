package com.AlaCartApp.models.request;

import com.AlaCartApp.models.entity.Category;
import com.AlaCartApp.models.entity.Image;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter @Setter
public class ProductDto {

    Long id;

    String name;

    Double price;

    Category category;

    String description;

    List<Image> images;

}

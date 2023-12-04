package com.AlaCartApp.models.response;

import com.AlaCartApp.models.entity.Category;
import com.AlaCartApp.models.entity.Image;
import lombok.Data;
import java.util.List;


@Data
public class ProductDto {

    Long id;
    String name;
    Double price;
    Category category;
    String description;
    List<Image> images;
    Boolean state;

}

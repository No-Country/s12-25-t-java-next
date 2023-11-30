package com.AlaCartApp.models.mapper;

import com.AlaCartApp.models.entity.Product;
import com.AlaCartApp.models.response.ProductDtoResponse;
import com.AlaCartApp.models.request.ProductDtoRequest;
import org.mapstruct.InheritInverseConfiguration;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;

import java.util.List;

@Mapper(componentModel = "spring")
public interface ProductMapper {

    @Mappings({
            @Mapping(source = "id", target = "id"),
            @Mapping(source = "name", target = "name"),
            @Mapping(source = "price", target = "price"),
            @Mapping(source = "category", target = "category"),
            @Mapping(source = "description", target = "description"),
            @Mapping(source = "state", target = "state"),
            @Mapping(source = "images", target = "images")
    })
    ProductDtoResponse toProductDTO(Product product);
    List<ProductDtoResponse> toProductsDTO(List<Product> products);
    @InheritInverseConfiguration
    Product toProduct(ProductDtoResponse productDto);
    @Mapping(source = "idCategory",target = "category.id")
    Product toProductFromRequest(ProductDtoRequest productDtoRequest);

}

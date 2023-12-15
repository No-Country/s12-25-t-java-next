package com.AlaCartApp.controller;

import com.AlaCartApp.models.request.CategoryDto;
import com.AlaCartApp.service.implementation.CategoryServiceImp;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/categories")
@RequiredArgsConstructor
public class CategoryController {

    private final CategoryServiceImp categoryServiceImp;

    @GetMapping
    public ResponseEntity<?> findAllAvailable(){
        return new ResponseEntity<>(categoryServiceImp.findAllAvailable(),HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> findById(@PathVariable Long id){
        if(id < 0 || id == null) return new ResponseEntity<>("ID not supported", HttpStatus.BAD_REQUEST);
        CategoryDto category = categoryServiceImp.findAvailableAndId(id);
        if (category != null) return new ResponseEntity<>(category, HttpStatus.OK);
        else return new ResponseEntity<>("Category not found", HttpStatus.NOT_FOUND);
    }

    @GetMapping("/un-available")
    public ResponseEntity<?> findAllUmAvailable(){
        List<CategoryDto> categories = categoryServiceImp.findAllUnAvailable();
        if (categories != null) return new ResponseEntity<>(categories,HttpStatus.OK);
        return new ResponseEntity<>("There are no categories unavailable", HttpStatus.NOT_FOUND);
    }

    @GetMapping("/all")
    private ResponseEntity<?> findAll(){
        return new ResponseEntity<>(categoryServiceImp.findAll(), HttpStatus.OK);
    }
    @GetMapping("/{name}")
    public ResponseEntity<?> findByName(@PathVariable String name){
        if(name.equalsIgnoreCase("") || name.equals(null)){
            return  new ResponseEntity<>("NAME not supported",HttpStatus.BAD_REQUEST);
        }
        CategoryDto category = categoryServiceImp.findByName(name);
        if (category != null) return new ResponseEntity<>(category, HttpStatus.OK);
        else return new ResponseEntity<>("Category not found", HttpStatus.NOT_FOUND);
    }

    @PostMapping
    public ResponseEntity<?> createCategory(@RequestBody @Valid CategoryDto categoryDto){
        if (categoryDto.getName().equals(null)) {
            return new ResponseEntity<>("FIELD EMPTY", HttpStatus.BAD_REQUEST);
        }
        CategoryDto category = categoryServiceImp.createCategory(categoryDto);

        if (category != null) return new ResponseEntity<>(category, HttpStatus.CREATED);
        else return new ResponseEntity<>("bad request",HttpStatus.BAD_REQUEST);
    }

    @PostMapping("/change-name")
    public ResponseEntity<?> changeName(@RequestBody String name, @RequestBody  Long id){
        if (name.equals("") || name.equals(null) || id.equals(null) || id < 0){
            return new ResponseEntity<>("FIELDS NOT SUPPORTED", HttpStatus.BAD_REQUEST);
        }
        CategoryDto category = categoryServiceImp.changeName(name,id);
        if (category != null) return new ResponseEntity<>(category, HttpStatus.OK);
        return new ResponseEntity<>("category not found", HttpStatus.NOT_FOUND);
    }

    @PostMapping("/change-available")
    public ResponseEntity<?> changeAvailable(@RequestBody Boolean available, @RequestBody Long id){
        if (available.equals(null)|| id.equals(null)||id<0){
            return new ResponseEntity<>("FIELDS NOT SUPPORTED",HttpStatus.BAD_REQUEST);
        }
        CategoryDto category;
        if (available) {
            category = categoryServiceImp.makeAvailable(id);
            if (category != null) return new ResponseEntity<>(category, HttpStatus.OK);
            else return new ResponseEntity<>("category not found", HttpStatus.NOT_FOUND);
        }else {
            category = categoryServiceImp.makeUnAvailable(id);
            if (category != null) return new ResponseEntity<>(category, HttpStatus.OK);
            else return new ResponseEntity<>("category not found", HttpStatus.NOT_FOUND);
        }
    }
}

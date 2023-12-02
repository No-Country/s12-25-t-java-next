package com.AlaCartApp.controller;

import com.AlaCartApp.models.entity.TableEntity;
import com.AlaCartApp.service.abstraction.TableService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/table")
public class TableController {

    @Autowired
    private TableService tableService;

    @PostMapping
    public ResponseEntity<?> create (@RequestBody TableEntity tableEntity){

        TableEntity table = tableService.create(tableEntity).orElse(null);
        if(table != null){
            return new ResponseEntity<>(tableService.create(table), HttpStatus.CREATED);
        }

        return new ResponseEntity<>("No se pudo crear la entidad", HttpStatus.NO_CONTENT);
    }

    @GetMapping("/all")
    public ResponseEntity<?> getTables (){
        List<TableEntity> tables = tableService.tableList().get();

        if (tables.isEmpty()){
            return new ResponseEntity<>("La lista esta vaciá", HttpStatus.NO_CONTENT);
        }
            return new ResponseEntity<>(tables, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getTable (@PathVariable Long id){
        
        TableEntity table = tableService.tableId(id).orElse(null);
        
        if (table != null){
            return new ResponseEntity<>(tableService.tableId(id), HttpStatus.OK);
        }

        return new ResponseEntity<>("no se encuentra la mesa.", HttpStatus.NOT_FOUND);
    }

    @PutMapping
    public ResponseEntity<?> update (@RequestBody TableEntity tableEntity){

        TableEntity table = tableService.update(tableEntity).orElse(null);
        assert table != null;
        if (table.equals(tableEntity)) return new ResponseEntity<>(table, HttpStatus.OK);
        return new ResponseEntity<>("No se actualizo la mesa porque es la misma", HttpStatus.BAD_REQUEST);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete (@PathVariable Long id){
        tableService.delete(id);
        return new ResponseEntity<>("Se elimino la mesa!", HttpStatus.OK);
    }

}

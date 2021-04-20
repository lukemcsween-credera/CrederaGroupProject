package com.example.shop.controller;

import com.example.shop.model.AddItemRequestDto;
import com.example.shop.model.ItemDto;
import com.example.shop.service.ItemService;
import org.apache.catalina.connector.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class ItemController {

    @GetMapping("/item/{id}")
    public ResponseEntity<ItemDto> getItemById() {
        return null;
    }

    @PostMapping("/item")
    public Response addItem(@RequestBody AddItemRequestDto request) {
        return null;
    }

    //TODO: add any other item-related endpoints you might need
}

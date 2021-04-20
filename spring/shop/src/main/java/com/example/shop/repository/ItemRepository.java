package com.example.shop.repository;

import com.example.shop.model.ItemDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ItemRepository extends JpaRepository<ItemDto, Long> {
    // TODO: add any needed custom repository methods
}

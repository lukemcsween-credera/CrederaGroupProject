package com.example.shop.repository;

import com.example.shop.model.OrderDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderRepository extends JpaRepository<OrderDto, Long> {
    // TODO: add any needed custom repository methods
}

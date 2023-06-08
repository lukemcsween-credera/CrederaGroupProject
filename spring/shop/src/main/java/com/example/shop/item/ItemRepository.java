package com.example.shop.item;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface ItemRepository extends JpaRepository<Item, Long> {
    /* NOTE: by extending JpaRepository, we "automagically" get some
        basic DB CRUD functionalities built in. See JPA docs for details.
        TODO: add any needed custom repository methods
     */
    @Query("SELECT i FROM items WHERE i.item_name LIKE %:search%")
    public List<Item> findByItemContaining(@Param("search") String search);
}

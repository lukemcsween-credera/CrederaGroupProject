package com.example.shop.cart;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.transaction.Transactional;

@Component
public class CartService {

    private final CartRepository cartRepository;

    @Autowired
    public CartService(CartRepository cartRepository) {
        this.cartRepository = cartRepository;
    }

    public Cart getCartById(long id) {
        return cartRepository.findById(id).orElse(null);
    }

    @Transactional
    public Cart createCart() {
        Cart newCart = new Cart();
        return cartRepository.save(newCart);
    }
}

package com.web.HopEcom.Services;

import com.web.HopEcom.Model.ShoppingCartItem;

import java.util.List;

public interface ShoppingCartService {
    void addToCart(Long productId, int quantity);
    List<ShoppingCartItem> getShoppingCartItems();
    void removeFromCart(Long cartItemId);

    // Other shopping cart-related methods
}
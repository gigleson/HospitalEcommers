package com.web.HopEcom.Services.impl;

import com.web.HopEcom.Model.Product;
import com.web.HopEcom.Model.ShoppingCart;
import com.web.HopEcom.Model.ShoppingCartItem;
import com.web.HopEcom.Services.ShoppingCartService;
import com.web.HopEcom.repo.ProductRepository;
import com.web.HopEcom.repo.ShoppingCartItemRepository;
import com.web.HopEcom.repo.ShoppingCartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ShoppingCartServiceImpl implements ShoppingCartService {

    @Autowired
    private ShoppingCartRepository shoppingCartRepository;

    @Autowired
    private ShoppingCartItemRepository shoppingCartItemRepository;

    @Autowired
    private ProductRepository productRepository;

    @Override
    public void addToCart(Long productId, int quantity) {
        // Logic to add the product to the shopping cart
        // You may want to check if the product is already in the cart and update the quantity

        Product product = productRepository.findById(productId).orElse(null);

        if (product != null) {
            ShoppingCart shoppingCart = new ShoppingCart();
            ShoppingCartItem cartItem = new ShoppingCartItem();
            cartItem.setShoppingCart(shoppingCart);
            cartItem.setProduct(product);
            cartItem.setQuantity(quantity);
            cartItem.setTotalPrice(product.getCost() * quantity);

            shoppingCartRepository.save(shoppingCart);
            shoppingCartItemRepository.save(cartItem);
        }
    }

    @Override
    public List<ShoppingCartItem> getShoppingCartItems() {
        // Logic to retrieve shopping cart items

        return shoppingCartItemRepository.findAll();
    }
    @Override
    public void removeFromCart(Long cartItemId) {
        Optional<ShoppingCartItem> optionalCartItem = shoppingCartItemRepository.findById(cartItemId);
        optionalCartItem.ifPresent(cartItem -> shoppingCartItemRepository.delete(cartItem));
    }

}

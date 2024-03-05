package com.web.HopEcom.controllers;

import com.web.HopEcom.Model.Product;
import com.web.HopEcom.Services.ProductService;
import com.web.HopEcom.Services.ShoppingCartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/products")
public class ProductController {

    @Autowired
    private ProductService productService;
    @Autowired
    private ShoppingCartService shoppingCartService;


    @GetMapping
    public ResponseEntity<List<Product>> getAllProducts() {
        List<Product> products = productService.getAllProducts();
        return ResponseEntity.ok(products);
    }

    @GetMapping("/{productId}")
    public ResponseEntity<Product> getProductById(@PathVariable Long productId) {
        Product product = productService.getProductById(productId);
        if (product != null) {
            return ResponseEntity.ok(product);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    public ResponseEntity<Product> createProduct(@RequestBody Product product) {
        Product savedProduct = productService.saveProduct(product);
        return ResponseEntity.ok(savedProduct);
    }

    @DeleteMapping("/{productId}")
    public ResponseEntity<Void> deleteProduct(@PathVariable Long productId) {
        productService.deleteProduct(productId);
        return ResponseEntity.noContent().build();
    }
    @PostMapping("/add-to-cart/{productId}/{quantity}")
    public ResponseEntity<Void> addToCart(@PathVariable Long productId, @PathVariable int quantity) {
        shoppingCartService.addToCart(productId, quantity);
        return ResponseEntity.ok().build();
    }
    @DeleteMapping("/remove-from-cart/{cartItemId}")
    public ResponseEntity<Void> removeFromCart(@PathVariable Long cartItemId) {
        shoppingCartService.removeFromCart(cartItemId);
        return ResponseEntity.ok().build();
    }
}

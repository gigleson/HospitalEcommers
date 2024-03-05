package com.web.HopEcom.Services;

import com.web.HopEcom.Model.Product;

import java.util.List;

public interface ProductService {
    List<Product> getAllProducts();
    Product getProductById(Long productId);
    Product saveProduct(Product product);
    void deleteProduct(Long productId);
}

package com.web.HopEcom.repo;

import com.web.HopEcom.Model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {

    // Add custom queries or methods if needed
}
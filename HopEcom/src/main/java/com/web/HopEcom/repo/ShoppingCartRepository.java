package com.web.HopEcom.repo;

import com.web.HopEcom.Model.ShoppingCart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface ShoppingCartRepository extends JpaRepository<ShoppingCart, Long> {
    // Add custom queries or methods if needed
}
package com.web.HopEcom.repo;

import com.web.HopEcom.Model.ShoppingCartItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository


public interface ShoppingCartItemRepository extends JpaRepository<ShoppingCartItem, Long> {
    // Add custom queries or methods if needed
}

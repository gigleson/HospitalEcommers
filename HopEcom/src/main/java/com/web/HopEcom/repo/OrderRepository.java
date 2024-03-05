package com.web.HopEcom.repo;

import com.web.HopEcom.Model.Order;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OrderRepository extends JpaRepository<Order, Long> {
    List<Order> findByUserId(Long userId);
    // Add custom queries or methods if needed
}

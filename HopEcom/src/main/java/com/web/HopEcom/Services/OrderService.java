package com.web.HopEcom.Services;

import com.web.HopEcom.Model.Order;

import java.util.List;

public interface OrderService {
    Order createOrder(Long shoppingCartId, Long userId);
    List<Order> getAllOrders();
    List<Order> getOrdersByUserId(Long userId);
    // Other order-related methods
}
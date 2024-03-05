package com.web.HopEcom.Services.impl;


// OrderServiceImpl.java
import com.web.HopEcom.Model.Order;
import com.web.HopEcom.Model.ShoppingCart;
import com.web.HopEcom.Model.User;
import com.web.HopEcom.Services.OrderService;
import com.web.HopEcom.repo.OrderRepository;
import com.web.HopEcom.repo.ShoppingCartRepository;
import com.web.HopEcom.repo.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class OrderServiceImpl implements OrderService {

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private ShoppingCartRepository shoppingCartRepository;

    @Autowired
    private UserRepository userRepository;

    @Override
    public Order createOrder(Long shoppingCartId, Long userId) {
        ShoppingCart shoppingCart = shoppingCartRepository.findById(shoppingCartId)
                .orElseThrow(() -> new RuntimeException("Shopping cart not found"));

        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));

        Order order = new Order();
        order.setShoppingCart(shoppingCart);
        order.setUser(user);
        order.setOrderDate(LocalDateTime.now());

        return orderRepository.save(order);
    }

    @Override
    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }
    @Override
    public List<Order> getOrdersByUserId(Long userId) {
        return orderRepository.findByUserId(userId);
    }
}

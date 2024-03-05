package com.web.HopEcom.Model;
import jakarta.persistence.Entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "a")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long orderId;

    @ManyToOne
    private ShoppingCart shoppingCart;

    @ManyToOne
    private User user;

    private LocalDateTime orderDate;

    // Constructors, getters, and setters

    // ...
}

package com.web.HopEcom.Model;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class ShoppingCartItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long cartItemId;

    @ManyToOne
    private ShoppingCart shoppingCart;

    @ManyToOne
    private Product product;

    private int quantity;
    private double totalPrice;

    // Constructors, getters, and setters

    // ...
}

package com.web.HopEcom.Model;

import jakarta.persistence.Entity;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Entity
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long productId;

    private String productName;
    private double cost;
    private String image;

    // Constructors, getters, and setters

    // ...
}

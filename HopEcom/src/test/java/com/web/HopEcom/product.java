//package com.web.HopEcom;// ProductControllerTest.java
//import com.web.HopEcom.Model.Product;
//import com.web.HopEcom.controllers.ProductController;
//import com.web.HopEcom.Model.Product;
//import com.web.HopEcom.Services.ProductService;
//import org.junit.jupiter.api.Test;
//import org.mockito.InjectMocks;
//import org.mockito.Mock;
//import org.springframework.http.ResponseEntity;
//
//import java.util.Collections;
//import java.util.List;
//
//import static org.junit.jupiter.api.Assertions.assertEquals;
//import static org.mockito.Mockito.*;
//
//class ProductControllerTest {
//
//    @Mock
//    private ProductService productService;
//
//    @InjectMocks
//    private ProductController productController;
//
//    @Test
//    void testGetAllProducts() {
//        // Mocking the service
//        when(productService.getAllProducts()).thenReturn(Collections.singletonList(new Product(1L, "Mocked Product", 10.0)));
//
//        // Calling the controller method
//        ResponseEntity<List<Product>> responseEntity = productController.getAllProducts();
//
//        // Assertions
//        assertEquals(200, responseEntity.getStatusCodeValue());
//        assertEquals(1, responseEntity.getBody().size());
//        assertEquals("Mocked Product", responseEntity.getBody().get(0).getProductName());
//
//        // Verify that the service method was called
//        verify(productService, times(1)).getAllProducts();
//    }
//
//    // Add more tests for other methods in ProductController
//}

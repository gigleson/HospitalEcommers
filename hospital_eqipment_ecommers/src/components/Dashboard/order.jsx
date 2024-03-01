import React, { useEffect, useState } from "react";
import SidebarMenu from "./sidebar.tsx";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const AdminOrders = () => {
    const [dummyOrders, setDummyOrders] = useState([
      // Add your dummy data for orders
      { id: 1, category: "Masks", product: "Mask", customer: "kaushal", date: "2024-03-01", number: "9841553654", price: 20 },
     
      // Add more dummy orders as needed
    ]);
  
    return (
      <div className="flex h-screen">
        <SidebarMenu activePage="/orders" />
  
        <div className="flex-grow overflow-hidden">
          <div className={"orders-page"}>
            <header className={"orders-page-header"}>
              <h1 className="text-2xl font-semibold">All Orders</h1>
            </header>
  
            <div className={"orders-main-content"}>
              <div className={"orders-main-content-wrapper"}>
                <div className={"table-container"}>
                  <div className={"card-body"}>
                    <table className={"table-bordered w-full"}>
                      <thead>
                        <tr>
                          <th className={"category-box"}>Category</th>
                          <th className={"product-box"}>Product</th>
                          <th className={"customer-box"}>Customer</th>
                          <th className={"date-box"}>Date</th>
                          <th className={"number-box"}>Number</th>
                          <th className={"price-box"}>Price</th>
                        </tr>
                      </thead>
                      <tbody>
                        {dummyOrders.map((order) => (
                          <tr key={order.id}>
                            <td>{order.category}</td>
                            <td>{order.product}</td>
                            <td>{order.customer}</td>
                            <td>{order.date}</td>
                            <td>{order.number}</td>
                            <td>{order.price}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default AdminOrders;
  
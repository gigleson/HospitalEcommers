import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home_page';
import Product from './pages/product_page';
import Login from './pages/signIn_page';
import Registration from './pages/signUp_page';
import  ForgotPassword from './pages/forgotpassword_page';
import  Shop from './pages/catogary_page';
import Cart from './pages/Cart_page';
import ADash from './pages/adminDash_page';
import Category from './components/Dashboard/category';
import P from './components/Dashboard/product';
import O from './components/Dashboard/order';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";



const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/signIn" element={<Login />} />
          <Route path="/signUp" element={<Registration />} />
          <Route path="/fp" element={<ForgotPassword/>} />
          <Route path="/shop" element={<Shop/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/ad" element={<ADash/>} />
          <Route path="/ct" element={<Category/>} />
          <Route path="/pt" element={<P/>} />
          <Route path="/ot" element={<O/>} />
          
        </Routes>
      </Router>
    </QueryClientProvider>
  );
};
 
export default App;

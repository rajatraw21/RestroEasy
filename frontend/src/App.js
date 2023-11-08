import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "antd/dist/antd.min.css";
import "./App.css";

import AdminHome from "./pages/adminhome/AdminHome";
import Products from "./pages/products/Products";
import Cart from "./pages/cart/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Bills from "./pages/bills/Bills";
import Customers from "./pages/customers/Customers";
import AOS from "aos";

import "aos/dist/aos.css";
function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <Router>
        <Routes>
          <Route
            exact
            path="/adminhome"
            element={
              <ProtectedRouter>
                <AdminHome />
              </ProtectedRouter>
            }
          />
          <Route
            exact
            path="/products"
            element={
              <ProtectedRouter>
                <Products />
              </ProtectedRouter>
            }
          />
          <Route
            exact
            path="/cart"
            element={
              <ProtectedRouter>
                <Cart />
              </ProtectedRouter>
            }
          />
          <Route
            exact
            path="/bills"
            element={
              <ProtectedRouter>
                <Bills />
              </ProtectedRouter>
            }
          />
          <Route
            exact
            path="/customers"
            element={
              <ProtectedRouter>
                <Customers />
              </ProtectedRouter>
            }
          />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

export function ProtectedRouter({ children }) {
  if (localStorage.getItem("auth")) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
}

import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useState } from "react";
import NavBar from "@/components/NavBar";
import CartDrawer from "@/components/CartDrawer";
import Home from "@/pages/Home";
import Menu from "@/pages/Menu";
import Checkout from "@/pages/Checkout";
import OrderSuccess from "@/pages/OrderSuccess";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import { Toaster } from "react-hot-toast";
import { useAuth } from "@/contexts/AuthContext";

function PrivateRoute({ children }) {
  const { isAuth } = useAuth();
  const loc = useLocation();
  return isAuth ? children : <Navigate to={`/login?next=${loc.pathname}`} replace />;
}

export default function App() {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <>
      <NavBar onCart={() => setCartOpen(true)} />
      <CartDrawer open={cartOpen} onClose={setCartOpen} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/menu/:slug" element={<Menu />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/checkout" element={<PrivateRoute><Checkout /></PrivateRoute>} />
        <Route path="/success/:id" element={<OrderSuccess />} />
      </Routes>

      <Toaster position="top-right" />
    </>
  );
}

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import SIgnIn from "../pages/auth/signIn";
import SignUp from "../pages/auth/signUp";
import DashboardHome from "../pages/dashboard/home";
import Products from "../pages/products";
import Analytics from "../pages/analytics";
import Inventory from "../pages/inventory";
import Notifications from "../pages/notifications";
import ProtectedRoute from "./auth";
import MyCart from "../pages/dashboard/myCart";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SIgnIn />} />
        <Route path="/signUp" element={<SignUp />} />

        {/* Protected Routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardHome />
            </ProtectedRoute>
          }
        />
        <Route
          path="/products"
          element={
            <ProtectedRoute>
              <Products />
            </ProtectedRoute>
          }
        />
        <Route
          path="/analytics"
          element={
            <ProtectedRoute>
              <Analytics />
            </ProtectedRoute>
          }
        />
        <Route
          path="/inventory"
          element={
            <ProtectedRoute>
              <Inventory />
            </ProtectedRoute>
          }
        />
        <Route
          path="/notifications"
          element={
            <ProtectedRoute>
              <Notifications />
            </ProtectedRoute>
          }
        />
        <Route
          path="/mycart"
          element={
            <ProtectedRoute>
              <MyCart />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;

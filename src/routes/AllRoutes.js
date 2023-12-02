import { Routes, Route } from "react-router-dom";
import {
  HomePage,
  ProductsList,
  ProductDetail,
  Login,
  Register,
  CartPage,
  DashboardPage,
  PageNotFound,
  Success,
} from "../pages/index";

import { ProtectedRoute } from "./ProtectedRoute";

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="products" element={<ProductsList />} />
        <Route path="products/:id" element={<ProductDetail />} />

        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />

        <Route
          path="cart"
          element={
            <ProtectedRoute>
              {" "}
              <CartPage />{" "}
            </ProtectedRoute>
          }
        />

        <Route path="success" element={<Success />} />
        <Route
          path="dashboard"
          element={
            <ProtectedRoute>
              {" "}
              <DashboardPage />{" "}
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

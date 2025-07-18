import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "../pages/Home/HomePage";
import ProductsList from "../pages/Products/ProductsList";
import ProductsDetails from "../pages/ProductDetail";
import Login from "../pages/Login";
import Register from "../pages/Register";
import CartPage from "../pages/Cart/CartPage";
import ProtectedRoute from "./ProtectedRoute";
import OrderPage from "../pages/Order/OrderPage";
import DashboardPage from "../pages/Dashboard/DashboardPage";
import PageNotFound from "../pages/PageNotFound";

export default function AllRoutes() {
    const token = true;
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="products" element={<ProductsList />} />
            <Route path="products/:id" element={<ProductsDetails />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="cart" element={ <ProtectedRoute><CartPage /></ProtectedRoute> } />
            <Route path="order-summary" element={ <ProtectedRoute><OrderPage /></ProtectedRoute> } />
            <Route path="dashboard" element={ <ProtectedRoute><DashboardPage /></ProtectedRoute> } />
            <Route path="*" element={ <PageNotFound /> } />


        </Routes>
    );
}
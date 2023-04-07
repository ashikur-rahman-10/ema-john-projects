import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Layout/Home";
import Shop from "./components/shop/Shop";
import Order from "./components/Order/Order";
import Inventory from "./components/Inventory/Inventory";
import CartDataLoader from "./Loaders/CartDataLoader";
import Notfound from "./components/NotFound/Notfound";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>,
        children: [
            {
                path: "/",
                element: <Shop></Shop>,
            },
            {
                path: "/order",
                element: <Order></Order>,
                loader: CartDataLoader,
            },
            {
                path: "/inventory",
                element: <Inventory></Inventory>,
            },
            {
                path: "/*",
                element: <Notfound></Notfound>,
            },
        ],
    },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

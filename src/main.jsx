import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import Shop from "./components/Shop/Shop.jsx";
import LandingPage from "./components/Home/LandingPage.jsx";
import Inventory from "./components/Inventory/Inventory.jsx";
import OrderReview from "./components/OrderReview/OrderReview.jsx";
import Login from "./components/Login/Login.jsx";
import loadData from "./LoadData/LoadData.js";
import Signup from "./components/Signup/Signup.jsx";
import AuthProviders from "./Providers/AuthProviders.jsx";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <LandingPage></LandingPage>,
      },
      {
        path: "/shop",
        element: <Shop></Shop>,
      },
      {
        path: "/order_review",
        element: <OrderReview></OrderReview>,
        loader: loadData,
      },
      {
        path: "/manage_inventory",
        element: (
          <PrivateRoute>
            <Inventory></Inventory>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "*",
        element: (
          <div>
            <h1>404 error</h1>
          </div>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <div>404 error</div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>
);

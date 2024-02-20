import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { Toolbar } from "@mui/material";
// import { store } from "./store";
import { setupStore } from './store'
import { Outlet } from "react-router-dom";
import ProductDetailsPage from "./pages/ProductDetailsPage/ProductDetailsPage";
import Header from "./components/Header/Header";
import CartComponentPage from "./pages/CartComponentPage/CartComponentPage";
import OrderComponentPage from "./pages/OrderComponentPage/OrderComponentPage";
import SuccessPage from "./pages/SuccessPage/SuccessPage";
import "./index.css";

function Layout() {
  return (
    <>
      <Header />
      <Toolbar />
      <Outlet />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "item/:id",
        element: <ProductDetailsPage />,
      },
      {
        path: "/",
        element: <App />,
      },
      {
        path: "cart",
        element: <CartComponentPage />,
        children: [],
      },
      {
        path: "order",
        element: <OrderComponentPage />,
      },
      {
        path: "success",
        element: <SuccessPage />,
      },
      {
        path: '*',
        element: <App />
      }
    ],
  },
]);

const store = setupStore();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

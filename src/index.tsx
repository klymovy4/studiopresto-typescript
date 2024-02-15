import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { Toolbar } from "@mui/material";
// import { store } from "./store";
import {setupStore} from './store'
import { Outlet } from "react-router-dom";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Header from "./components/Header/Header";
import CartComponent from "./components/CartComponent/CartComponent";
import OrderComponent from "./components/OrderComponent/OrderComponent";
import SuccessPage from "./components/SuccessPage/SuccessPage";

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
        element: <ProductDetails />,
      },
      {
        path: "/",
        element: <App />,
      },
      {
        path: "cart",
        element: <CartComponent />,
        children: [],
      },
      {
        path: "order",
        element: <OrderComponent />,
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

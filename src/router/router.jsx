import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import NotFound from "../components/not-found/not-found";
import Shop from "../components/shop/shop";
import { loaderCartAndProducts } from "../loaders/loaderCartAndProducts";
import ReviewOrder from "../components/review-order/reviewOrder";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        loader: () => {
          return fetch("products.json");
        },
        element: <Shop />,
      },
      {
        path: "orderreview",
        loader: loaderCartAndProducts,
        element: <ReviewOrder />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
    errorElement: <NotFound />,
  },
]);

import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import NotFound from "../components/not-found/not-found";
import Shop from "../components/shop/shop";
import { loaderCartAndProducts } from "../loaders/loaderCartAndProducts";
import ReviewOrder from "../components/review-order/reviewOrder";

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
    ],
    errorElement: <NotFound />,
  },
]);

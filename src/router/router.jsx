import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import NotFound from "../components/not-found/not-found";
import Shop from "../components/shop/shop";
import ReviewOrder from "../components/review-order/review-order";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Shop /> },
      { path: "shop", element: <Shop /> },
      { path: "orderreview", element: <ReviewOrder /> },
    ],
    errorElement: <NotFound />,
  },
]);

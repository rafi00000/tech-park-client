import { createBrowserRouter } from "react-router-dom";
import RootPage from "../Page/Root/RootPage";
import HomePage from "../Page/Home/HomePage";
import AddProduct from "../Page/AddProduct/AddProduct";

const route = createBrowserRouter([
  {
    path: "/",
    element: <RootPage></RootPage>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path: '/addProduct',
        element: <AddProduct></AddProduct>,
        loader: () => fetch('/brand.json')
      }
    ],
  },
]);
export default route;

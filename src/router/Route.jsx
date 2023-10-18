import { createBrowserRouter, useLoaderData } from "react-router-dom";
import RootPage from "../Page/Root/RootPage";
import HomePage from "../Page/Home/HomePage";
import AddProduct from "../Page/AddProduct/AddProduct";
import BrandPage from "../Page/BrandPage/BrandPage";
import AddCategory from "../Page/AddCategory.jsx/AddCategory";

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
        path: "/addProduct",
        element: <AddProduct></AddProduct>,
        loader: () => fetch("http://localhost:5000/category"),
      },
      {
        path: "/brand/:name",
        loader: ({ params }) => fetch(`http://localhost:5000/product/${params.name}`),
        element: <BrandPage></BrandPage>,
      },
      {
        path: "/category",
        element: <AddCategory></AddCategory>,
      },
    ],
  },
]);
export default route;

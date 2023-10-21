import { createBrowserRouter } from "react-router-dom";
import RootPage from "../Page/Root/RootPage";
import HomePage from "../Page/Home/HomePage";
import AddProduct from "../Page/AddProduct/AddProduct";
import BrandPage from "../Page/BrandPage/BrandPage";
import AddCategory from "../Page/AddCategory.jsx/AddCategory";
import UpdateForm from "../Page/UpdateForm/UpdateForm";
import DetailsPage from "../Page/DetailsPage/DetailsPage";
import CartPage from "../Page/Mycart/CartPage";
import LoginPage from "../Page/Auth/LoginPage";
import RegisterPage from "../Page/Auth/RegisterPage";
import PrivateRoute from "../Components/AuthProvider/PrivateRoute";

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
        element: (
          <PrivateRoute>
            <AddProduct></AddProduct>
          </PrivateRoute>
        ),
        loader: () =>
          fetch(
            "https://b8a10-brandshop-server-side-rafi00000-33c55kgg1-rafi00000.vercel.app/category"
          ),
      },
      {
        path: "/brand/:name",
        loader: ({ params }) =>
          fetch(
            `https://b8a10-brandshop-server-side-rafi00000-33c55kgg1-rafi00000.vercel.app/product/${params.name}`
          ),
        element: (
          <PrivateRoute>
            <BrandPage></BrandPage>
          </PrivateRoute>
        ),
      },
      {
        path: "/category",
        element: (
          <PrivateRoute>
            <AddCategory></AddCategory>
          </PrivateRoute>
        ),
      },
      {
        path: "/update/:id",
        loader: ({ params }) =>
          fetch(
            `https://b8a10-brandshop-server-side-rafi00000-33c55kgg1-rafi00000.vercel.app/productDetails/${params.id}`
          ),
        element: (
          <PrivateRoute>
            <UpdateForm></UpdateForm>
          </PrivateRoute>
        ),
      },
      {
        path: "/productDetails/:id",
        loader: ({ params }) =>
          fetch(
            `https://b8a10-brandshop-server-side-rafi00000-33c55kgg1-rafi00000.vercel.app/productDetails/${params.id}`
          ),
        element: (
          <PrivateRoute>
            <DetailsPage></DetailsPage>
          </PrivateRoute>
        ),
      },
      {
        path: "/myCart",
        loader: () =>
          fetch(
            "https://b8a10-brandshop-server-side-rafi00000-33c55kgg1-rafi00000.vercel.app/cart"
          ),
        element: (
          <PrivateRoute>
            <CartPage></CartPage>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <LoginPage></LoginPage>,
      },
      {
        path: "/register",
        element: <RegisterPage></RegisterPage>,
      },
    ],
  },
]);
export default route;

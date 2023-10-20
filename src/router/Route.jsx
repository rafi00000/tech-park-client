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
      {
        path: '/update/:id',
        loader: ({params}) => fetch(`http://localhost:5000/productDetails/${params.id}`),
        element: <UpdateForm></UpdateForm>
      },
      {
        path: '/productDetails/:id',
        loader: ({params}) => fetch(`http://localhost:5000/productDetails/${params.id}`),
        element: <DetailsPage></DetailsPage>,
      },
      {
        path: '/myCart',
        loader: () => fetch('http://localhost:5000/cart'),
        element: <CartPage></CartPage>
      },
      {
        path: '/login',
        element: <LoginPage></LoginPage>
      },
      {
        path: '/register',
        element: <RegisterPage></RegisterPage>
      }
    ],
  },
]);
export default route;

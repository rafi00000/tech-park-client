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
        element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>,
        loader: () => fetch("http://localhost:5000/category"),
      },
      {
        path: "/brand/:name",
        loader: ({ params }) => fetch(`http://localhost:5000/product/${params.name}`),
        element: <PrivateRoute><BrandPage></BrandPage></PrivateRoute>,
      },
      {
        path: "/category",
        element: <PrivateRoute><AddCategory></AddCategory></PrivateRoute>,
      },
      {
        path: '/update/:id',
        loader: ({params}) => fetch(`http://localhost:5000/productDetails/${params.id}`),
        element: <PrivateRoute><UpdateForm></UpdateForm></PrivateRoute>
      },
      {
        path: '/productDetails/:id',
        loader: ({params}) => fetch(`http://localhost:5000/productDetails/${params.id}`),
        element: <PrivateRoute><DetailsPage></DetailsPage></PrivateRoute>,
      },
      {
        path: '/myCart',
        loader: () => fetch('http://localhost:5000/cart'),
        element: <PrivateRoute><CartPage></CartPage></PrivateRoute>
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

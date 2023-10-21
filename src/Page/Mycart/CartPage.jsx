import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const CartPage = () => {
  const cartLoadedProduct = useLoaderData();
  const [cartData, setCartData] = useState(cartLoadedProduct);

  const handleDelete = (_id) => {
    fetch(
      `https://b8a10-brandshop-server-side-rafi00000-33c55kgg1-rafi00000.vercel.app/cart/${_id}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          toast.success("Deleted Successfully");
          const remaining = cartData.filter((item) => item._id !== _id);
          setCartData(remaining);
        }
      });
  };

  return (
    <div className="grid gap-5 grid-cols-1 md:grid-cols-2 my-10 min-h-screen">
      {cartData.length < 1 ? (
        <div>
          <img
            src="https://i.ibb.co/z8HbsWG/empty-cart.png"
            alt=""
            className=""
          />
          <p className="text-xl font-bold">There is nothing in the cart</p>
        </div>
      ) : (
        cartData.map((cartItem) => (
          <div key={cartItem._id}>
            <div className="flex p-5 justify-around border rounded-xl items-center">
              <div className="w-24">
                <img src={cartItem.url} alt="" className="w-full mx-auto" />
              </div>
              <p>{cartItem.name}</p>
              <p>{cartItem.price} $</p>
              <button
                className="btn btn-square bg-red-600 text-white hover:bg-red-700"
                onClick={() => handleDelete(cartItem._id)}
              >
                x
              </button>
            </div>
          </div>
        ))
      )}

      <Toaster></Toaster>
    </div>
  );
};

export default CartPage;

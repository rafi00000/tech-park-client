import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { AuthContext } from '../../Components/AuthProvider/AuthProvider';

const CartPage = () => {
  const {user} = useContext(AuthContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() =>{
    axios.get(`https://tech-park-server-ivory.vercel.app/cart?email=${user.email}`)
    .then(res =>{
      console.log(res.data);
      setCartData(res.data);
    })
  }, [user])

  const handleDelete = (_id) => {
    fetch(`https://tech-park-server-ivory.vercel.app/cart/${_id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          toast.success('Deleted Successfully');
          const remaining = cartData.filter((item) => item._id !== _id);
          setCartData(remaining);
        }
      });
  };

  return (
    <div className='my-10 min-h-screen'>
      <h1 className='text-center font-bold text-5xl mb-9'>My Cart</h1>
      {cartData.length < 1 ? (
        <div className='flex justify-center items-center flex-col w-full'>
          <img
            src='https://i.ibb.co/z8HbsWG/empty-cart.png'
            alt=''
            className='w-96'
          />
          <p className='text-xl font-bold'>There is nothing in the cart</p>
        </div>
      ) : (
        <div className='grid grid-cols-1 md:grid-cols-2  gap-7'>
          {
            cartData.map((cartItem) => (
              <div key={cartItem._id}>
                <div className='flex p-5 justify-around border rounded-xl items-center'>
                  <div className='w-24'>
                    <img src={cartItem.url} alt='' className='w-full mx-auto' />
                  </div>
                  <p>{cartItem.name}</p>
                  <p>{cartItem.price} $</p>
                  <button
                    className='btn btn-square bg-red-600 text-white hover:bg-red-700'
                    onClick={() => handleDelete(cartItem._id)}
                  >
                    x
                  </button>
                </div>
              </div>
            ))
          }
        </div>
      )}

      <Toaster></Toaster>
    </div>
  );
};

export default CartPage;

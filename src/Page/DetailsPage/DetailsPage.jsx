import toast, { Toaster } from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';

const DetailsPage = () => {
  const product = useLoaderData();
  const { brand, name, price, rating, url, description } = product;

  const handleAddToCart = () => {
    const cartProduct = { brand, name, price, rating, url, description };
    console.log(cartProduct);
    fetch('https://tech-park-server-ivory.vercel.app/cart', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(cartProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success('Added to Cart Successfully');
        }
      });
  };

  return (
    <div className='my-14 space-y-10'>
      <img src={url} alt='' className='w-2/7 mx-auto' />
      <h2 className='text-3xl font-semibold text-center '>{name}</h2>
      <div className='text-xl space-y-2'>
        <p>
          <span className='font-bold'>Brand</span>: {brand}
        </p>
        <p>
          <span className='font-bold'>Price: </span>
          {price}$
        </p>
        <p>
          <span className='font-bold'>Description: </span>
          {description}
        </p>
        <p>
          <span className='font-bold'>Rating: </span>
          {rating} Starts
        </p>
        <button className='btn btn-outline' onClick={handleAddToCart}>
          Add to cart
        </button>
      </div>
      <Toaster></Toaster>
    </div>
  );
};

export default DetailsPage;

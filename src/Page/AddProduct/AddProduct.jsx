import { useLoaderData } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const AddProduct = () => {
  const data = useLoaderData();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const url = form.url.value;
    const brand = form.brand.value;
    const type = form.type.value;
    const price = parseFloat(form.price.value);
    const rating = parseFloat(form.rating.value);
    const description = form.description.value;
    const featured = form.featured.value;

    const product = {
      name,
      url,
      brand,
      type,
      price,
      rating,
      description,
      featured,
    };

    fetch('https://tech-park-server-ivory.vercel.app/product', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success('Added the item successfully');
          form.reset();
        }
      });
  };

  return (
    <div className='my-10 space-y-6'>
      <h1 className='text-4xl text-center font-bold underline'>Add Product</h1>

      <form
        className='mx-3 md:w-4/5 p-5 md:mx-auto rounded-xl border'
        onSubmit={handleSubmit}
      >
        {/* row 1 */}
        <div className='md:flex gap-3'>
          <div className='form-control md:w-1/2'>
            <label className='font-semibold'>Name</label>
            <input
              type='text'
              name='name'
              placeholder='Enter your name'
              className='input input-bordered'
              required
            />
          </div>

          <div className='form-control md:w-1/2'>
            <label className='font-semibold'>Image</label>
            <input
              type='text'
              name='url'
              placeholder='Image URL'
              className='input input-bordered'
            />
          </div>
        </div>
        {/* row 2 */}
        <div className='md:flex gap-3'>
          <div className='form-control md:w-1/2'>
            <label className='font-semibold'>Brand</label>
            <select name='brand' id='' className='input input-bordered'>
              {data.map((brand) => (
                <option key={brand.id} value={brand.name.toLowerCase()}>
                  {brand.name}
                </option>
              ))}
            </select>
          </div>

          <div className='form-control md:w-1/2'>
            <label className='font-semibold'>Type</label>
            <select name='type' id='' className='input input-bordered'>
              <option value='phone'>Phone</option>
              <option value='laptop'>Laptop</option>
              <option value='headphone'>Headphone</option>
              <option value='processor'>Processor</option>
              <option value='watch'>Watch</option>
            </select>
          </div>
        </div>
        {/* row 3 */}
        <div className='md:flex gap-3'>
          <div className='form-control md:w-1/2'>
            <label className='font-semibold'>Price</label>
            <input
              type='number'
              name='price'
              placeholder='Amount'
              className='input input-bordered'
              required
            />
          </div>

          <div className='form-control md:w-1/2'>
            <label className='font-semibold'>Rating</label>
            <input
              type='number'
              name='rating'
              placeholder='Rating (in number)'
              className='input input-bordered'
            />
          </div>
          <div className='form-control md:w-1/2'>
            <label>Featured?</label>
            <select name='featured' id='' className='input input-bordered'>
              <option value='true'>Yes</option>
              <option value='false'>No</option>
            </select>
          </div>
        </div>

        <div className='form-control'>
          <label className='font-semibold'>Description</label>
          <input
            type='text'
            name='description'
            placeholder='Give a short description'
            className='input input-bordered'
          />
        </div>
        <input
          type='submit'
          value='Add Product'
          className='btn btn-outline w-full my-5 mx-auto'
        />
      </form>
      <Toaster></Toaster>
    </div>
  );
};

export default AddProduct;

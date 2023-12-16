import { useEffect, useState } from 'react';
import BrandCard from './BrandCard';
import { Link } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';

const HomePage = () => {
  const [brands, setBrands] = useState([]);
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    fetch('https://tech-park-server-ivory.vercel.app/category')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBrands(data);
      });
  }, []);

  useEffect(() => {
    fetch('https://tech-park-server-ivory.vercel.app/featured')
      .then((res) => res.json())
      .then((data) => {
        setFeatured(data);
      });
  }, []);

  console.log(brands);
  return (
    <div>
      {/* banner section */}
      <section className='bg-orange-200 flex flex-col-reverse md:flex-row justify-center items-center p-7 rounded-2xl'>
        <div className='space-y-6'>
          <p className='text-6xl font-bold'>
            Get the best product <br />
            on your hand
          </p>
          <button className='btn btn-outline'>Buy now</button>
        </div>
        <div className='md:w-1/2 mx-auto'>
          <img src='/banner.png' alt='' className=' w-full' />
        </div>
      </section>

      {/* brand name section */}
      <section>
        <h1 className='font-bold underline text-3xl text-center my-16'>
          Brands
        </h1>
        {/* brand container */}
        <div className='grid md:grid-cols-3 gap-10'>
          {brands.map((brand) => (
            <Link 
            key={brand.id} to={`/brand/${brand.name}`} 
            data-tooltip-id="my-tooltip"
            data-tooltip-content={`Click to view ${brand.name} product`}
            data-tooltip-place="top"
            ><BrandCard brand={brand}></BrandCard></Link>
          ))}
        </div>
      </section>

      <section className='my-10 space-y-7'>
        <p className='text-center text-4xl font-bold'>Our Customer review </p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20'>
          <div className='rounded-xl border p-5 space-y-6'>
            <img
              src='https://i.ibb.co/7yZk8sm/user1-1.jpg'
              alt=''
              className='w-full h-48 mx-auto rounded-xl'
            />
            <h2 className='text-xl font-semibold'>John Doe</h2>
            <p>
              Awesome Gadgets is truly a one-stop destination for tech
              enthusiasts like me. The range of products is impressive, and the
              customer service is top-notch. I recently purchased a new laptop,
              and the staff was incredibly helpful in guiding me through the
              features. Highly recommended
            </p>
          </div>
          <div className='rounded-xl border p-5 space-y-6'>
            <img
              src='https://i.ibb.co/tJWc3YT/user3-1.jpg'
              alt=''
              className='w-full h-48 mx-auto rounded-xl'
            />
            <h2 className='text-xl font-semibold'>David Johnson</h2>
            <p>
              I had a wonderful experience shopping at Awesome Gadgets. The
              staff was knowledgeable and friendly, and they helped me find the
              perfect smartphone within my budget. The store ambiance is
              inviting, and the overall shopping process was smooth. I would
              definitely recommend this place to anyone looking for quality
              gadgets.
            </p>
          </div>
          <div className='rounded-xl border p-5 space-y-6'>
            <img
              src='https://i.ibb.co/CnzQdhC/user2-1.jpg'
              alt=''
              className='w-full h-48 mx-auto rounded-xl'
            />
            <h2 className='text-xl font-semibold'>Michael Brown</h2>
            <p>
              I am thoroughly impressed with the range of products available at
              Awesome Gadgets. As a tech enthusiast, I was delighted to find the
              latest gaming peripherals and accessories that I couldn't find
              elsewhere. The staff was friendly and helped me choose the perfect
              gaming mouse that significantly enhanced my gaming experience. I
              will definitely be coming back for more!
            </p>
          </div>
        </div>
      </section>

      <section className='my-10 space-y-5'>
        <h2 className='text-3xl text-center font-semibold underline'>
          Featured Product
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 '>
          {featured.map((product) => (
            <BrandCard key={product._id} brand={product}></BrandCard>
          ))}
        </div>
      </section>
      <Tooltip id="my-tooltip" />
    </div>
  );
};

export default HomePage;

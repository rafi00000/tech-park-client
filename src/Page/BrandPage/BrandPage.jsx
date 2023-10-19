import { useLoaderData, useParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";



const BrandPage = () => {
  const [categoryLoadData, setCategoryLoadData] = useState([]);
  const brandLoadedProduct = useLoaderData();
  const { name } = useParams();


  // loading all category to match the specific categ
  useEffect(() => {
    fetch("http://localhost:5000/category")
      .then((res) => res.json())
      .then((data) => setCategoryLoadData(data));
  }, []);


  //   this is the category according to the brand page param
  const pageCategory = categoryLoadData.find(
    (category) => category.name.toLowerCase() === name.toLowerCase()
  );

  return (
    <div className="min-h-screen">
      <div className="carousel w-full">
        <div id="item1" className="carousel-item w-full">
          <img src={pageCategory?.slider1} className="w-full" />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img src={pageCategory?.slider2} />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img src={pageCategory?.slider3} className="w-full" />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
      </div>
      
      {/* product below */}
      <h1 className="text-center font-bold text-3xl underline my-10 bg">
        Products: {pageCategory?.name}
      </h1>
      {/* there is no product then it will show no product png */}
        {brandLoadedProduct.length < 1 ? (
          <div className="flex flex-col justify-center items-center my-10">
            <img
              src="https://i.ibb.co/6HX50xh/no-product.png"
              alt=""
              className="w-1/4 mx-auto"
            />
            <h1 className="text-3xl font-semibold text-center">
              No Product to show here
            </h1>
            <p>Item will be added soon</p>
          </div>
        ) : (
          // product container------------------
          <div className="grid md:grid-cols-3 gap-5 ">
            {brandLoadedProduct.map((brand) => (
              <ProductCard key={brand._id} product={brand}></ProductCard>
            ))}
          </div>
        )}
      
    </div>
  );
};

export default BrandPage;

import { useLoaderData, useLocation, useParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";

const BrandPage = () => {
  const [categoryLoadData, setCategoryLoadData] = useState([]);
  const brandLoadedProduct = useLoaderData();
  const { name } = useParams();

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
      {brandLoadedProduct.length < 1 ? (
        <div className="flex flex-col justify-center items-center min-h-screen">
          <img
            src="https://i.ibb.co/6HX50xh/no-product.png"
            alt=""
            className="w-1/4"
          />
          <h1 className="text-3xl font-semibold">No Product to show here</h1>
          <p>Item will be added soon</p>
        </div>
      ) : (
        brandLoadedProduct.map((brand) => (
          <ProductCard key={brand._id} product={brand}></ProductCard>
        ))
      )}
    </div>
  );
};

export default BrandPage;

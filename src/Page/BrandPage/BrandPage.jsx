import { useLoaderData } from "react-router-dom";
import ProductCard from "./ProductCard";

const BrandPage = () => {
  const brandLoadedProduct = useLoaderData();
  console.log(brandLoadedProduct);

  return (
    <div className="min-h-screen">
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
        brandLoadedProduct.map((brand) => <ProductCard key={brand._id} product={brand}></ProductCard>)
      )}
    </div>
  );
};

export default BrandPage;

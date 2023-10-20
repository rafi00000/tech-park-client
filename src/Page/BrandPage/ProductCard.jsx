import { Link, useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { brand, description, name, price, rating, type, url, _id } = product;

  const navigate = useNavigate(); 

  return (
    <div className="p-3 rounded-xl border flex flex-col justify-between space-y-2 ">
      <div className="relative">
        <img
          src={url}
          alt=""
          className="w-56 mx-auto relative flex-grow h-64"
        />
        <p className="text-xl font-bold absolute right-10 bottom-10 bg-yellow-400 p-2 text-white">
          rating: {rating}
        </p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1>
          <span className="font-bold text-xl">{name}</span>
        </h1>
        <p>
          <span className="text-md font-semibold">Brand name:</span> {brand}
        </p>
      </div>
      <div className="flex items-center justify-center gap-3">
        <p>
          <span className="text-md font-semibold">Price:</span> {price}$
        </p>
        <p>
          <span className="text-md font-semibold">Type:</span>
          {type}
        </p>
      </div>
      <p className="text-center">
        {description.length > 100
          ? description.slice(0, 150) + "..."
          : description}
      </p>
      {/* card finished here */}
      <div className="flex justify-center gap-5">
        <Link to={`/update/${_id}`}><button className="btn btn-sm btn-outline">Update</button></Link>
        <button className="btn btn-sm btn-outline" onClick={()=>navigate(`/productDetails/${_id}`)}>Details</button>
      </div>
    </div>
  );
};

export default ProductCard;

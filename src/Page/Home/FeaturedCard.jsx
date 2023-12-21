
const FeaturedCard = ({product}) => {
    const { name, url, price, brand} = product;
    console.log(product);    
    return (
        <div className="flex flex-col justify-between p-5 border rounded-xl cursor-pointer " >
            <img src={url} alt="" className="w-72 mx-auto"/>
            <h2 className="text-center font-semibold text-xl">{name}</h2>
            <div className="flex gap-3 justify-around items-center">
                <p>Price: {price}$</p>
                <p>Brand: {brand}</p>
            </div>
        </div>
    );
};

export default FeaturedCard;
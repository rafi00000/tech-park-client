
const ProductCard = ({product}) => {

    const {brand, description, name, price, rating, type, url, _id } = product;
    
    return (
        <div>
            <img src={url} alt="" />
            <h1>Name: <span className="font-bold text-xl">{name}</span></h1>
            
        </div>
    );
};

export default ProductCard;
const BrandCard = ({brand: product}) => {
    const { name, url, } = product;
    return (
        <div className="flex flex-col justify-between p-5 border rounded-xl cursor-pointer space-y-5" >
            <img src={url} alt="" className="w-72 mx-auto h-72"/>
            <h2 className="text-center font-semibold text-xl">{name}</h2>
        </div>
    );
};

export default BrandCard;

const BrandCard = ({brand}) => {
    const { name, url} = brand;
    console.log(brand);    
    return (
        <div className="flex flex-col justify-between p-5 border rounded-xl cursor-pointer" >
            <img src={url} alt="" className="w-72 mx-auto"/>
            <h2 className="text-center font-semibold text-xl">{name}</h2>
        </div>
    );
};

export default BrandCard;
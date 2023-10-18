import { useNavigate } from "react-router-dom";

const BrandCard = ({brand}) => {
    const {id, name, url} = brand;
    console.log(brand);
    const navigate = useNavigate();
    
    return (
        <div className="flex flex-col justify-between p-5 border rounded-xl cursor-pointer" onClick={()=>navigate(`/brand/${name}`)} >
            <img src={url} alt="" className="w-72 mx-auto"/>
            <h2 className="text-center font-semibold text-xl">{name}</h2>
        </div>
    );
};

export default BrandCard;
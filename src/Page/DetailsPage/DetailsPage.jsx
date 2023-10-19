import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

const DetailsPage = () => {
    const product = useLoaderData();
    const { brand, name, price, rating, url, description } = product;
    
    return (
        <div>
            
        </div>
    );
};

export default DetailsPage;
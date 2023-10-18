import { useLoaderData } from "react-router-dom";

const BrandPage = () => {
    const brandLoadedProduct = useLoaderData();
    console.log(brandLoadedProduct);

    return (
        <div className="min-h-screen">
            

            {/* product below */}
            {
                brandLoadedProduct.length < 1 ? 
                <div className="flex justify-center items-center min-h-screen">
                    <h1 className="text-">No Product to show here</h1>
                </div> : 
                brandLoadedProduct.map(brand => <p key={brand._id}>{brand.name}</p>)
            }
        </div>
    );
};

export default BrandPage;
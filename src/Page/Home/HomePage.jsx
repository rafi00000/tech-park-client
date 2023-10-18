import { useEffect, useState } from "react";
import BrandCard from "./BrandCard";

const HomePage = () => {

    const [brands, setBrands] = useState([]);

    useEffect(()=>{
        fetch('/brand.json')
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            setBrands(data)
        })
    }, [])

    console.log(brands);
    return (
        <div>
            {/* banner section */}
            <section className="bg-orange-200 flex flex-col-reverse md:flex-row justify-center items-center p-7 rounded-2xl">
                <div className="space-y-6">
                    <p className="text-6xl font-bold">Get the best product <br />on your hand</p>
                    <button className="btn btn-outline">Buy now</button>
                </div>
                <div className="md:w-1/2 mx-auto">
                    <img src="/banner.png" alt="" className=" w-full"/>
                </div>
            </section>

            {/* brand name section */}
            <section>
                <h1 className="font-bold underline text-3xl text-center my-16">Brands</h1>
                {/* brand container */}
                <div className="grid grid-cols-3 gap-10">
                    {
                        brands.map(brand => <BrandCard key={brand.id} brand={brand}></BrandCard>)
                    }
                </div>
            </section>
        </div>
    );
};

export default HomePage;
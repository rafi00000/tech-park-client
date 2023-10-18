import { useEffect, useState } from "react";

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
                
            </section>
        </div>
    );
};

export default HomePage;
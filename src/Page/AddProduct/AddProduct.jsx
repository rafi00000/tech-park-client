import { useState } from "react";
import { useLoaderData } from "react-router-dom";


const AddProduct = () => {

    const data = useLoaderData();

    const handleSubmit = (e) =>{
        e.preventDefault();

        const form = e.target;

        const name = form.name.value;
        const url = form.url.value ;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const description = form.description.value;
        

        const product = {name, url, brand, type, price, rating, description};
        console.log(product);
    }
    

  return (
    <div className="my-10 space-y-6">
      <h1 className="text-4xl text-center font-bold underline">Add Product</h1>

      <form className="md:w-4/5 p-5 mx-auto rounded-xl border" onSubmit={handleSubmit}>
        {/* row 1 */}
        <div className="flex gap-3">
          <div className="form-control w-1/2">
            <label className="font-semibold">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="input input-bordered"
            />
          </div>

          <div className="form-control w-1/2">
            <label className="font-semibold">Image</label>
            <input
              type="text"
              name="url"
              placeholder="Image URL"
              className="input input-bordered"
            />
          </div>
        </div>
        {/* row 2 */}
        <div className="flex gap-3">
          <div className="form-control w-1/2">
            <label className="font-semibold">Brand</label>
            <select name="brand" id="" className="input input-bordered">
                {
                    data.map(brand => <option key={brand.id} value={brand.name.toLowerCase()}>{brand.name}</option>)
                }
            </select>
          </div>

          <div className="form-control w-1/2">
            <label className="font-semibold">Type</label>
            <select name="type" id="" className="input input-bordered">
                <option value="phone">Phone</option>
                <option value="laptop">Laptop</option>
                <option value="headphone">Headphone</option>
                <option value="processor">Processor</option>
            </select>
          </div>
        </div>
        {/* row 3 */}
        <div className="flex gap-3">
          <div className="form-control w-1/2">
            <label className="font-semibold">Price</label>
            <input
              type="number"
              name="price"
              placeholder="Amount"
              className="input input-bordered"
            />
          </div>

          <div className="form-control w-1/2">
            <label className="font-semibold">Rating</label>
            <input
              type="number"
              name="rating"
              placeholder="Rating (in number)"
              className="input input-bordered"
            />
          </div>
        </div>

        <div className="form-control">
            <label className="font-semibold">Description</label>
            <input
              type="text"
              name="description"
              placeholder="Give a short description"
              className="input input-bordered"
            />
          </div>
          <input type="submit" value="Submit" className="btn btn-outline w-full my-5 mx-auto" />
      </form>
    </div>
  );
};

export default AddProduct;

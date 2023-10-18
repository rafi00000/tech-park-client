const AddCategory = () => {
  const handleCategoryForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const url = form.url.value;
    const slider1 = form.slider1.value;
    const slider2 = form.slider2.value;
    const slider3 = form.slider3.value;

    const category = { name, url, slider1, slider2, slider3 };
    console.log(category);
    fetch('http://localhost:5000/category', {
        method: 'POST',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(category)
    })
  };

  return (
    <div>
      <form className=" border rounded-xl my-10 p-10" onSubmit={handleCategoryForm}>
        <div className="form-control">
          <label>Name</label>
          <input
            type="text"
            name="name"
            className="input input-bordered"
            placeholder="Enter the category name"
          />
        </div>

        <div className="form-control">
          <label>URL</label>
          <input
            type="text"
            name="url"
            className="input input-bordered"
            placeholder="Photo URL"
          />
        </div>

        <div className="form-control">
          <label>Slider 1</label>
          <input
            type="text"
            name="slider1"
            className="input input-bordered"
            placeholder="Slider 1 URL"
          />
        </div>

        <div className="form-control">
          <label>Slider 2</label>
          <input
            type="text"
            name="slider2"
            className="input input-bordered"
            placeholder="Slider 2 URL"
          />
        </div>

        <div className="form-control">
          <label>Slider 3</label>
          <input
            type="text"
            name="slider3"
            className="input input-bordered"
            placeholder="Slider 3 URL"
          />
        </div>
        <input type="submit" value="Create" className="btn btn-outline my-4 w-full" />
      </form>
    </div>
  );
};

export default AddCategory;

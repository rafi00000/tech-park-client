import { useContext } from "react";
import { AuthContext } from "./../Components/AuthProvider/AuthProvider";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const FeedbackForm = () => {
  const { user } = useContext(AuthContext);
  const handleFeedback = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    const feedback = { name, email, message };

    axios
      .post("https://tech-park-server-ivory.vercel.app/feedback", feedback)
      .then((res) => {
        console.log(res.data);
        toast.success("Successfully Posted Review");
        form.reset();
      });
  };

  return (
    <div className="min-h-screen">
      <h1 className="text-center font-bold text-5xl">Give Feedback</h1>
      <form
        className="border md:w-1/2 p-5 mx-auto my-5 rounded-md"
        onSubmit={handleFeedback}
      >
        <div className="form-control">
          <label>Name</label>
          <input type="text" name="name" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label>Email</label>
          <input
            type="text"
            name="email"
            className="input input-bordered"
            defaultValue={user?.email}
            disabled
          />
        </div>
        <div className="form-control">
          <label>message</label>
          <textarea
            name="message"
            className="input input-bordered p-3"
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <p className="text-center">
          <button className="btn btn-outline">Submit</button>
        </p>
      </form>
      <Toaster></Toaster>
    </div>
  );
};

export default FeedbackForm;

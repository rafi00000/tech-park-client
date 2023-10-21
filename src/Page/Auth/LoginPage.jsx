import { useContext } from "react";
import { AuthContext } from "../../Components/AuthProvider/AuthProvider";
import { Link } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";

const LoginPage = () => {

    const {signInUser, googleSignIn} = useContext(AuthContext);
    

    const handleLogin = (e) =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signInUser(email, password)
        .then(user => {
          toast.success('Login successfull')
        })
        .catch(error => {
          console.log(error);
          toast.error("wrong email or password")
        })
    }

    const handleGoogleLogin = () =>{
      googleSignIn()
      .then(user => console.log(user))
      .catch(error => console.log(error))
    }


  return (
    <div className="min-h-screen space-y-4 md:my-20">
      <form className="md:w-2/4 mx-auto p-5 md:p-10 border rounded-xl space-y-5" onSubmit={handleLogin}>
        <h2 className="text-center text-4xl font-semibold mb-10">login here</h2>
        <div className="form-control">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter Your Email here"
            className="input input-bordered"
            name="email"
            required
          />
        </div>
        <div className="form-control">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter Your Email here"
            className="input input-bordered"
            name="password"
            required
          />
        </div>
        <input type="submit" value="Login" className="btn btn-outline w-full"/>
       
      </form>
      <div className="space-y-2 rounded-lg flex gap-3 w-fit p-4 mx-auto cursor-pointer btn btn-outline" onClick={handleGoogleLogin}>
        <FaGoogle className="text-xl " ></FaGoogle>
        <p className="text-center">Login with google</p>
        </div>
        <p className="text-center">New Here? <Link to={'/register'} className="font-bold text-blue-700">Register Now</Link></p>
        <Toaster></Toaster>
    </div>
  );
};

export default LoginPage;

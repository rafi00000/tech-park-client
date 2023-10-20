import { useContext } from "react";
import { AuthContext } from "../../Components/AuthProvider/AuthProvider";
import { Link } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";

const LoginPage = () => {

    const {signInUser, googleSignIn} = useContext(AuthContext);
    

    const handleLogin = (e) =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signInUser(email, password)
        .then(user => console.log(user))
    }

    const handleGoogleLogin = () =>{
      googleSignIn()
      .then(user => console.log(user))
      .catch(error => console.log(error))
    }


  return (
    <div className="min-h-screen space-y-4 my-20">
      <form className="md:w-2/4 mx-auto p-10 border rounded-xl space-y-5" onSubmit={handleLogin}>
        <h2 className="text-center text-4xl font-semibold mb-10">login here</h2>
        <div className="form-control">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter Your Email here"
            className="input input-bordered"
            name="email"
          />
        </div>
        <div className="form-control">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter Your Email here"
            className="input input-bordered"
            name="password"
          />
        </div>
        <input type="submit" value="Login" className="btn btn-outline w-full"/>
        <div className="space-y-2 rounded-lg border">
        <FaGoogle className="text-2xl mx-auto cursor-pointer" onClick={handleGoogleLogin}></FaGoogle>
        <p className="text-center">Login with google</p>
        </div>
        <p className="text-center">New Here? <Link to={'/register'} className="font-bold text-blue-700">Register Now</Link></p>
      </form>
    </div>
  );
};

export default LoginPage;

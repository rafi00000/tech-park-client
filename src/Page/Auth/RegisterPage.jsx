import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Components/AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";
import toast, { Toaster } from "react-hot-toast";

const RegisterPage = () => {

    const {createUser} = useContext(AuthContext)


    const handleRegister = (e) =>{
        e.preventDefault();
        
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const url = form.url.value;
        const password = form.password.value;

        if(password.length < 6){
            return toast.error('Give at least 6 digits')
        }
        else if(!/^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).+$/.test(password)){
            return toast.error('give atleast one special character and a capital letter')
        }

        createUser(email, password)
        .then(data => {
            const user = data.user;
            updateProfile(user, {
                displayName: name,
                photoURL: url
            })
            .then(()=>{
                console.log('updated the user');
            })
            .catch(err =>{
                console.log(err);
            })
        })
        .catch(err =>{
            console.log(err);
        })
    }


    return (
        <div className="min-h-screen space-y-4 my-20">
      <form className="md:w-2/4 mx-auto p-10 border rounded-xl space-y-5" onSubmit={handleRegister}>
        <h2 className="text-center text-4xl font-semibold mb-10">Register Here</h2>
        <div className="form-control">
          <label>Name</label>
          <input
            type="text"
            placeholder="Enter Your Name here"
            className="input input-bordered"
            name="name"
          />
        </div>
        <div className="form-control">
          <label>Photo URL</label>
          <input
            type="text"
            placeholder="Enter Your photo url here"
            className="input input-bordered"
            name="url"
          />
        </div>
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
            placeholder="Enter Your password here"
            className="input input-bordered"
            name="password"
          />
        </div>
        <input type="submit" value="Login" className="btn btn-outline w-full"/>
        <p className="text-center">Already have an account? <Link to={'/login'} className="font-bold text-blue-700">login Now</Link></p>
      </form>
      <Toaster></Toaster>
    </div>
    );
};

export default RegisterPage;
// import { FaGoogle,FaGithub } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";



import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";
import useAuth from "../hooks/UseAuth";
import SocialLogin from "./SocialLogin";



const Login = () => {

    const { signIn } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();



    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const onSubmit = data => {
        const {email, password} = data;
        signIn(email,password)
        .then(() =>{
           toast.success('user logged in successfully')
            navigate(location?.state ? location.state : '/');
        })
        .catch(error =>{
            toast.error(error.message)
        })
      };




    // const handleLogin = e =>{
    //     e.preventDefault()
    //     console.log(e.currentTarget);
    //     const form = new FormData(e.currentTarget);
    //     const email = form.get('email');
    //     const password = form.get('password');
    //     // console.log(form.get('password'));
    //     signIn(email, password)
    //     .then(result =>{
    //         console.log(result.user)

    //         // navigate after login


    //        
    //     })
    //     .catch(error =>{
    //         console.error(error)
    //     })
    // }
    return (
        <div className="hero min-h-screen bg-base-200">
            <Helmet>
                <title>EcoCrafts Hub | Login</title>
            </Helmet>
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold my-10 font-poppins">Please login</h1>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input 
                            type="email" 
                            placeholder="Your Email" 
                            {...register("email", { required: true })}
                            className="input input-bordered" required />
                               {errors.email && <span className="text-red-500">This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input 
                            type="password" 
                            placeholder="Password" 
                            {...register("password", { required: true })}
                            className="input input-bordered" required />
                               {errors.password && <span className="text-red-500">This field is required</span>}
                            {/* <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label> */}
                              
                        </div>
                      
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    
                </div>
                <p>Do no have an account please <Link className="text-blue-600" to="/register">Register</Link></p>
               <SocialLogin></SocialLogin>
               
            </div>
           
            
            
        </div>
    );
};

export default Login;
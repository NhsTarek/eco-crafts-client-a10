import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import useAuth from "../hooks/UseAuth";




const Register = () => {

    const { createUser, updateUserProfile } = useAuth()
    const location = useLocation();
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false)



    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = data => {
        const { email, password, image, fullName } = data;
        if (password.length < 6) {
            toast.error('Password should have at least 6 characters or longer');
            return;
        }

        else if (!/[A-Z]/.test(password)) {
            toast.error("Password must contain at least one uppercase letter.")
            return;
        }

        else if (!/[a-z]/.test(password)) {
            toast.error("Password must contain at least one lowercase letter.")
            return;
        }

        createUser(email, password)
            .then(() => {
                updateUserProfile(fullName, image)
                    .then(() => {
                        toast.success('Registration completed')
                        navigate(location?.state ? location.state : '/');
                    })

            })
            .catch(error => {
                toast.error(error.message)
            })
    };


    // const handleRegister = e =>{
    //     e.preventDefault()
    //     console.log(e.currentTarget);
    //     const form = new FormData(e.currentTarget);
    //     const email = form.get('email');
    //     const name = form.get('name');
    //     const photo = form.get('photo');
    //     const password = form.get('password');
    //     console.log(email, name, photo, password);



    // create user
    // createUser(email, password)
    // .then(result => console.log(result.user))
    // .catch(error => console.error(error)) }

    return (
        <div className="hero min-h-screen bg-base-200">
            <Helmet>
            <title>EcoCrafts Hub | Register</title>
            </Helmet>
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold my-10 font-poppins">Please Register</h1>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Full name"

                                {...register("fullName", { required: true })}
                                className="input input-bordered" />
                            {errors.fullName && <span className="text-red-500">This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image Url</span>
                            </label>
                            <input
                                type="text"
                                placeholder="image url"

                                {...register("image")}
                                className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Your Email"

                                {...register("email", { required: true })}
                                className="input input-bordered" />
                            {errors.email && <span className="text-red-500">This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <div className="flex gap-2 items-center">
                                <div>
                                    <input
                                        type={showPassword ? "text" : "password"}

                                        placeholder="Password"

                                        {...register("password", { required: true })}
                                        className="input input-bordered" />
                                    {errors.password && <span className="text-red-500">This field is required</span>}
                                </div>
                                <div>
                                    <span onClick={() => setShowPassword(!showPassword)}>

                                        {
                                            showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                        }
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>


                </div>
                <p>Already have an account please <Link className="text-blue-600" to="/login">Login</Link></p>
            </div>
            
        </div>
    );
};

export default Register;
import { FaGithub, FaGoogle } from "react-icons/fa";

import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useAuth from "../hooks/UseAuth";



const SocialLogin = () => {
    const { googleLogin, githubLogin } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();


    const handleSocialLogin = socialProvider => {
        socialProvider()
            .then(() => {
                toast.success('user logged in successfully')
                navigate(location?.state ? location.state : '/');
            })

    }




    return (
        <div>
            <div className="divider divider-neutral font-poppins font-bold text-center">Or</div>
            <div className="flex border-2 my-5 rounded-2xl gap-10  items-center btn justify-center" onClick={() => handleSocialLogin(googleLogin)}>
                <span className="text-3xl text-red-600"><FaGoogle /></span>
                <h2 className="text-2xl font-poppins font-semibold">Login With Google</h2>
            </div>
            <div className="flex border-2 rounded-2xl gap-5 md:gap-10 lg:gap-10  items-center btn justify-center" onClick={() => handleSocialLogin(githubLogin) }>
                <span className="text-3xl text-slate-600"><FaGithub /></span>
                <h2 className="text-2xl font-poppins font-semibold">Login With Github</h2>
            </div>
        </div>
    );
};

export default SocialLogin;
/* eslint-disable react/prop-types */
import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import AuthContext from "../../context/AuthContext/AuthContext";
import { useNavigate } from "react-router-dom";


const SocialLogin = ({from}) => {
    const { signInWithGoogle } = useContext(AuthContext); 
    const navigate = useNavigate(); 


    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user)
                navigate(from ); 
            })
            .catch(error => {
            console.log(error.message);
            })
        
    }
    return (
        <div>
               <button onClick={handleGoogleSignIn} className="btn-outline border border-gray-200 px-8  py-2 rounded-lg font-semibold lg:font-bold flex items-center justify-center gap-2"><span className="text-2xl"><FcGoogle/></span> Google</button>
        </div>
    );
};

export default SocialLogin;
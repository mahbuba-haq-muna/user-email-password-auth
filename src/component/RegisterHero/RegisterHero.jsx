import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useState } from "react";
import { FaEye, FaEyeSlash } from 'react-icons/fa';


const RegisterHero = () => {

    const [userError, setUserError] = useState('');
    const [success, setSuccess] = useState();
    const [showPassword, setShowPassword] = useState(false)

    const handleHero = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        setUserError('');
        setSuccess('');

        console.log(email, password);

        if(password.length < 6){
            setUserError('password should be at least 6 character or longer');
            return;
        }
        else if(!/[A-Z]/.test(password)){
            setUserError('Password should have at least 1 uppercase character');
            return;
        }


        
        createUserWithEmailAndPassword(auth, email, password)

        .then(result =>{
            console.log(result.user);
            setSuccess('you have registered successfully')
        })
        .catch(error =>{
            console.log(error)
            setUserError(error.message)
        })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                           <form onSubmit={handleHero}>
                           <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                               
                               <input 
                                type={showPassword ? "text" : "password"}  
                                name= "password"
                                placeholder="password" 
                                className="input input-bordered" required/>
                                <span onClick={() =>setShowPassword(!showPassword)}>
                                    {
                                        showPassword? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                    }
                                </span>
                               
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div>
                                <input type="checkbox" name="terms" id="terms" />
                                <label className="ml-2" htmlFor="terms">Accept our <a href="">terms and conditions</a></label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                           </form>
                           {
                            userError && <p className="text-xl text-red-600 ">{userError}</p>
                           }
                           {
                            success && <p className="text-xl text-green-600">{success}</p>
                           }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterHero;
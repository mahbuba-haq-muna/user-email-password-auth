import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useState } from "react";
import { Link } from "react-router-dom";


const Login = () => {

    const [success, setSuccess] = useState();
    const [loginError, setLoginError] =useState();

    const handleLogin = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        setSuccess('');
        setLoginError('');

        console.log(email, password);

        signInWithEmailAndPassword(auth, email, password)
        .then(result =>{
           console.log (result.user)
           setSuccess('Login successfully')
        } )
        .catch(error => {console.log(error)
            setLoginError(error.message)
        })
        

    }

    return (
        <div className="hero min-h-screen bg-base-200">
            
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                       <form onSubmit={handleLogin}>
                         <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a onClick={handleForgetPassword} href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        </form>
                        {
                            success && <p className="text-green-700 ">{success}</p>
                        }
                        {
                            loginError && <p className="text-red-500 ">{loginError}</p>
                        }
                        <p>New to this website? Please <Link to={"/register"}>register</Link></p>
                    </div>
                </div>
            
        </div>
    );
};

export default Login;
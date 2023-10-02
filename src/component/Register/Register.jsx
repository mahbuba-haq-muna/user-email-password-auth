import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Register = () => {

    const [userError, setUserError] = useState('');
    const [success, setSuccess] = useState();
    const [showPassword, setShowPassword] = useState(false)

    const handleRegister = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const accepted = e.target.terms.checked;

        setUserError('');
        setSuccess('');

        console.log(email, password, accepted);

        if (password.length < 6) {
            setUserError('password should be at least 6 character or longer');
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setUserError('Password should have at least 1 uppercase character');
            return;
        }
        else if(!accepted){
            setUserError('Please accept our terms and conditions')
        }



        createUserWithEmailAndPassword(auth, email, password)

            .then(result => {
                console.log(result.user);
                setSuccess('you have registered successfully')
            })
            .catch(error => {
                console.log(error)
                setUserError(error.message)
            })
    }

    return (
        <div >
            <div className="mx-auto md:w-1/2 border bg-zinc-200   p-5">
                <h2 className="text-3xl text-center py-5">please register</h2>

                <form onSubmit={handleRegister}>
                    <input className="w-full py-2 px-3 mb-2" type="email" name="email" placeholder="  email" id="" required />
                    <br />
                    <div className=" relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            placeholder="password"
                            className="w-full py-2 px-3" required />
                        <span onClick={() => setShowPassword(!showPassword)} className="absolute top-3 right-4 ">
                            {
                                showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                            }
                        </span>
                    </div>
                    <br />
                    <div className="mb-4">
                        <input type="checkbox" name="terms" id="terms" />
                        <label className="ml-2" htmlFor="terms">Accept our <a href="">terms and conditions</a></label>
                    </div>
                    <input className=" w-full btn-primary py-2 px-3 rounded-md" type="submit" value="Register" />
                </form>
                {
                    userError && <p className="text-xl text-red-600 ">{userError}</p>
                }
                {
                    success && <p className="text-xl text-green-600">{success}</p>
                }
                <p>Already have an account? please <Link to={"/login"}>login</Link></p>
            </div>
        </div>
    );
};

export default Register;
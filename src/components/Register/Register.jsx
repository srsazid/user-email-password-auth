import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useState } from "react";
import { FaEye, FaEyeSlash, } from 'react-icons/fa';
const Register = () => {

    const [registerError, setRegisterError] = useState('');
    const [registrationSuccess, setRegistrationSuccess] = useState('');
    const [showPassword, setShowPassword] = useState(false);


    const handleRegister = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        // reset error
        setRegisterError('');
        setRegistrationSuccess('');

        // const passwordValidation = (password.length < 6) ? setRegisterError("Password should be at least 6 characters") : "";

        if (password.length < 6) {
            setRegisterError("Password should be at least 6 characters");
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setRegisterError("Your password should have any gubri/gabri characters")
            return;
        }


        // create user
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user)
                setRegistrationSuccess("Registration Success")
            })
            .catch(error => {
                console.error(error)
                setRegisterError(error.message);
            })

    }


    return (
        <>
            <div className="mx-auto md:w-1/2 mt-10 ">
                <h2 className="text-3xl mb-8 font-bold mx-auto text-center">Please Register</h2>
                <form onSubmit={handleRegister} className="text-center">
                    <input className=" mb-8 w-full py-2 px-4 rounded-lg input input-bordered " type="email" name="email" placeholder="Email" required />
                    <div className="relative top-9 left-60 right-0 rounded">
                    </div>
                    <input className="  w-full py-2 px-4 rounded-lg mx-auto input input-bordered"
                        type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder="Password"
                        required />

                    <span className="absolute bottom-8 hover:cursor-pointer" onClick={() => setShowPassword(!showPassword)} >
                        <div className="relative right-8">
                            {
                                showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                            }
                        </div>
                    </span>
                    <input type="checkbox" name="terms" id="" /> <a href="">Terms and Conditions</a>
                    <br />
                    <br />
                    {
                        registerError && <p className="text-red-500">{registerError}</p>

                    }
                    {
                        registrationSuccess && <p className="text-green-500">{registrationSuccess}</p>
                    }
                    <input className="btn btn-secondary mb-4 w-3/4" type="submit" value="Register" />
                </form>


            </div>
        </>
    );
};

export default Register;
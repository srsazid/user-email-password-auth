import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useRef, useState } from 'react';
import { Link } from "react-router-dom";


const Login = () => {
    const [loginError, setLoginError] = useState('');
    const [loginSuccess, setLoginSuccess] = useState('');
    const emailRef = useRef(null);

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        // reset error and success
        setLoginError('');
        setLoginSuccess('');


        // add validation
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user);
                if(result.user.emailVerified){
                    setLoginSuccess("Logged in Successfully")
                    return;
                }
                else{
                    alert("Verify uour email address")
                    return;
                }
            })
            .catch(error => {
                console.error(error);
                setLoginError("Invalid Email Or Password");
            })
    }


    const handleForgetPassword = () => {
        const email = emailRef.current.value;
        if(!email){
            console.log("Provide an email", emailRef.current.value)
            return;
        }
        else if(!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)){
            console.log('please write a valid email')
            return;
        }
  
        // send validation email
        sendPasswordResetEmail(auth, email)
        .then(()=>{
            alert("please check your email")
        })
        .catch(error =>{
            console.log(error)
        })

    }



    return (
        <div>
            <div>
                <h2 className="text-3xl font-bold text-center py-10">Login Now!</h2>
            </div>
            <div className="card w-4/12 mx-auto shadow-2xl bg-base-100">
                <div className="card-body">
                    <form onSubmit={handleLogin}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>

                            <input
                                type="email"
                                placeholder="email"
                                name="email"
                                ref={emailRef}
                                className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" className="input input-bordered" />
                            <label className="label">
                                <a onClick={handleForgetPassword} href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        {
                            loginError && <p className="text-red-500">{loginError}</p>

                        }
                        {
                            loginSuccess && <p className="text-green-500">{loginSuccess}</p>
                        }
                        <input type="submit" placeholder="Login" className="btn btn-primary w-full" />

                    </form>
                    <p>Register Your Account <Link className="btn bg-green-400 py-1 px-2" to="/register">Register</Link></p>

                </div>
            </div>
        </div >

    );
};

export default Login;
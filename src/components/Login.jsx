import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';
import { useContext } from "react";
import swal from 'sweetalert';
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

import { Helmet } from "react-helmet-async";
import { AuthContext } from "../providers/AuthProvider";
import app from "../firebase/firebase.config";




const Login = () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();


    const { signIn } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);

    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);

        // signin
        signIn(email, password)
            .then(result => {
                console.log('login sucess', result);
                swal("Login Success!", "", "success");
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                console.log(error.message);
                swal("Login Faild!", "Invalid Mail or Password", "error");

            })
    }


    // --------------------Google Login-----------------

    const handleGoogleSignIn = () => {
        // console.log('google mama is coming')
        signInWithPopup(auth, provider)

            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                //navigate after login
                navigate(location?.state ? location.state : '/')
                swal("Login Success!", "", "success");

            })


            .catch(error => {
                console.log('error', error.message)
                swal("Login Faild!", "Invalid Mail or Password", "error");
            })

    }

    // -------------------------------------------------



    return (
        <div>
            <Helmet>
                <title>To Do | Login</title>
            </Helmet>

            <div className=" w-full md:w-2/3 lg:w-1/2 mx-auto p-10 border border-emerald-500 ">
                <h2 className="text-xl font-semibold text-center text-white">Please Login</h2>

                <form onSubmit={handleLogin}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="Enter your email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="Enter your password" className="input input-bordered" required />

                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <p className="text-center mt-3">Do not have an account? Please <Link className="text-blue-600 font-bold" to='/register'>Register</Link></p>
                {/* google login */}
                <div onClick={handleGoogleSignIn} className="flex justify-center items-center border rounded-xl py-3 mt-3 font-semibold text-lg ">
                    <FcGoogle></FcGoogle>
                    <p className="ml-2">Login With Google</p>
                </div>

            </div>

        </div>
    );
};

export default Login;
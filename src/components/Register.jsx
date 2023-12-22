import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";

import swal from 'sweetalert';
import { updateProfile } from "firebase/auth";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../providers/AuthProvider";



const Register = () => {


    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);

    // for password validation
    const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=!])(?=.*[a-zA-Z0-9@#$%^&+=!]).{8,}$/;
    // error showing
    const [registerError, setRegisterError] = useState('');


    const { createUser } = useContext(AuthContext);

    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const email = form.get('email');
        const photo = form.get('photo');
        const password = form.get('password');

        console.log(name, email, photo, password);

        // reset error
        setRegisterError('');

        if (!passwordPattern.test(password)) {
            setRegisterError('Password must be contain atleast 6 characters, a capital letter , a special character');
            // console.log('password wrong');
            return;
        }

        // createuser
        createUser(email, password)
            .then(result => {
                console.log('user create success', result);
                swal("Success!", "You registration successful", "success");

                // ------------ take user name and photo url from user-----------------

                updateProfile(result.user, {
                    displayName: name,
                    photoURL: photo
                })
                    .then(res => {
                        console.log(res);
                        window.location.reload();
                    })
                    .catch(error => {
                        console.log(error.message);
                    })



                // --------------------------------------------------------------------

                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                console.log(error.message);
                swal("Already have an account!", "Please login", "error");
                navigate(location?.state ? location.state : '/login');
            })


    }

    return (
        <div>
            <Helmet>
                <title>To Do | Register</title>
            </Helmet>


            <div className=" w-full md:w-2/3 lg:w-1/2 mx-auto p-10 border border-emerald-500 ">
                <h2 className="text-xl font-semibold text-center text-white">Please Register</h2>

                <form onSubmit={handleRegister}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Enter your name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="Enter your email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name="photo" placeholder="Enter your photo url" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="Enter your password" className="input input-bordered" required />
                        {
                            registerError && <p className="text-red-600 text-sm mb-3 text-center mt-2">{registerError}</p>
                        }
                    </div>
                    <div className="form-control mt-3">
                        <button className="btn btn-primary">Register</button>
                    </div>
                </form>
                <p className="text-center mt-3">Already have an account? Please <Link className="text-blue-600 font-bold" to='/login'>Login</Link></p>
            </div>



        </div>
    );
};

export default Register;
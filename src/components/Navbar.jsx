import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom"
import { AuthContext } from "../providers/AuthProvider";
import swal from "sweetalert";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);


    const handleSignOut = () => {
        logOut()
            .then(result => {
                console.log('logout success', result);
                swal("Logout Success!", "", "success");
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                console.log(error.message);
            })
    }


    const navLinks =
        <>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Guidline">Guidline</Link></li>
            <li><Link to="/contact">Contact</Link></li>

            {
                user ?
                    <li></li> :
                    <li><Link to="/register">Registration</Link></li>
            }


        </>
    return (

        <div className="navbar bg-base-100 font-medium text-xl top-0 z-50 sticky">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost text-lg">To Do List</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <div className='flex  justify-center items-center gap-2 '>
                            <div className=" flex justify-center items-center gap-2">
                                <img className="w-10 rounded-full" src={user.photoURL} />
                                <p className='text-xs lg:text-lg'>{user.displayName}</p>
                            </div>
                            <button onClick={handleSignOut} className='btn btn-outline btn-error'>Logout</button>

                        </div>
                        :
                        <Link to='/login'>
                            <button className='btn btn-outline btn-info'>Login</button>
                        </Link>

                }
            </div>
        </div>
    );
};

export default Navbar;
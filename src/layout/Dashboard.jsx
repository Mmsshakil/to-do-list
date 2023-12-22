import { NavLink, Outlet } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { IoPeopleSharp } from "react-icons/io5";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Dashboard = () => {

    const { user } = useContext(AuthContext);

    return (
        <div className="flex flex-col md:flex-row">
            <div className="w-auto p-0 lg:p-6 min-h-full lg:min-h-screen bg-slate-800 ">

                <ul className="menu space-y-5  text-white">
                    <li className="font-bold"><NavLink to='/'><IoHome className="text-2xl"></IoHome>Home</NavLink></li>
                    <li className="font-bold"><NavLink to='/dashboard'><IoPeopleSharp className="text-2xl"></IoPeopleSharp>Previous Task</NavLink></li>
                    <li className="font-bold"><NavLink to='/dashboard/createNewTasks'><IoPeopleSharp className="text-2xl"></IoPeopleSharp>Create Task</NavLink></li>

                </ul>
            </div>
            <div className="flex-1 mt-5 md:mt-10">
                <div className="flex flex-col justify-center items-center">
                    <img className="w-10" src={user.photoURL} alt="" />
                    <p className=" text-lg font-bold">{user.displayName}</p>
                    <div className="divider divider-info w-1/3 mx-auto"></div>
                </div>
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default Dashboard;
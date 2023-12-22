import { NavLink, Outlet } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { IoPeopleSharp, IoSettings  } from "react-icons/io5";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { FaTasks } from "react-icons/fa";
import { TiThList } from "react-icons/ti";

const Dashboard = () => {

    const { user } = useContext(AuthContext);

    return (
        <div className="flex flex-col md:flex-row">
            <div className="w-auto p-0 lg:p-6 min-h-full lg:min-h-screen bg-slate-800 ">

                <ul className="menu space-y-5  text-white">
                    <li className="font-bold"><NavLink to='/'><IoHome className="text-2xl"></IoHome>Home</NavLink></li>
                    <li className="font-bold"><NavLink to='/dashboard'><FaTasks className="text-2xl"></FaTasks>Previous Task</NavLink></li>
                    <li className="font-bold"><NavLink to='/dashboard/createNewTasks'><IoSettings  className="text-2xl"></IoSettings >Create Task</NavLink></li>
                    <li className="font-bold"><NavLink to='/dashboard/toDoPage'><TiThList  className="text-2xl"></TiThList >To-Do page</NavLink></li>

                </ul>
            </div>
            <div className="flex-1 mt-5 md:mt-10">
                <div className="flex flex-col justify-center items-center">
                    <img className="w-20" src={user.photoURL} alt="" />
                    <p className=" text-lg font-bold">{user.displayName}</p>
                    <div className="divider divider-info w-3/4 md:w-1/3 mx-auto"></div>
                </div>
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default Dashboard;
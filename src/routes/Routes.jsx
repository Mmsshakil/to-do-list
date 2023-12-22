import { createBrowserRouter } from 'react-router-dom';
import Root from '../layout/Root';
import ErrorPage from '../components/ErrorPage';
import Guidline from '../components/Guidline';
import Contact from '../components/Contact';
import Login from '../components/Login';
import Home from '../components/Home';
import Register from '../components/Register';
import PrivateRoute from './PrivateRoute';
import Dashboard from '../layout/Dashboard';
import CreateNewTask from '../dashboardPages/CreateNewTask';
import PreviousTask from '../dashboardPages/PreviousTask';
import UpdateTask from '../dashboardPages/UpdateTask';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/Guidline',
                element: <Guidline></Guidline>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <PreviousTask></PreviousTask>
            },
            {
                path: '/dashboard/createNewTasks',
                element: <CreateNewTask></CreateNewTask>
            },
            {
                path: '/dashboard/updateTask/:id',
                element: <PrivateRoute><UpdateTask></UpdateTask></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/taskOne/${params.id}`)
            },
        ]
    }
]);

export default router;
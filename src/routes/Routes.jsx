import { createBrowserRouter } from 'react-router-dom';
import Root from '../layout/Root';
import ErrorPage from '../components/ErrorPage';
import Guidline from '../components/Guidline';
import Contact from '../components/Contact';
import Login from '../components/Login';
import Home from '../components/Home';
import Register from '../components/Register';
import Dashboard from '../components/Dashboard';

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
            },
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            }
        ]
    },
]);

export default router;
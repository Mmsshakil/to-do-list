import { Helmet } from "react-helmet-async";
import { useRouteError } from "react-router-dom";


const ErrorPage = () => {

    const error = useRouteError();
    console.error(error);
    return (
        <div>
            <Helmet>
                <title>To Do | ErrorPage</title>
            </Helmet>
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
};

export default ErrorPage;
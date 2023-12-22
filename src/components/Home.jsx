import { Helmet } from "react-helmet-async";
import Guidline from "./Guidline";
import Banner from "./Banner";
import Contact from "./Contact";

const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <Guidline></Guidline>
            <Contact></Contact>
            <Helmet>
                <title>To Do | Home</title>
            </Helmet>
        </div >
    );
};

export default Home;
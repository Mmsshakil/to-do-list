import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="hero min-h-[300px] md:min-h-[600px]" style={{ backgroundImage: 'url(../todo-img.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-white">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Hello Everyone</h1>
                    <p className="mb-5">Let's save your task and always try to check it. List it with your priority with to-do, ongoing, and completed</p>
                    <Link to="/login" className="btn btn-neutral">Let’s Explore</Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;
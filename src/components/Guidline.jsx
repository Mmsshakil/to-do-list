import { Helmet } from "react-helmet-async";

const Guidline = () => {
    return (
        <div>
            <Helmet>
                <title>To Do | Guidline</title>
            </Helmet>
            <h3 className="text-3xl font-medium my-5 text-center lg:my-10">Who is Our Users</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
                <div className="card w-80 lg:w-96 bg-base-100 shadow-xl">
                    <figure><img className="h-56 " src="./developer.jpg" alt="Developers" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Developers</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                </div>
                <div className="card w-80 lg:w-96 bg-base-100 shadow-xl">
                    <figure><img className="h-56 " src="./businessman.png" alt="Businessman" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Businessman</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                </div>
                <div className="card w-80 lg:w-96 bg-base-100 shadow-xl">
                    <figure><img className="h-56 " src="./banker.png" alt="Banker" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Banker</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                </div>
                <div className="card w-80 lg:w-96 bg-base-100 shadow-xl">
                    <figure><img className="h-56 " src="./student.png" alt="Student" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Student</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                </div>
                <div className="card w-80 lg:w-96 bg-base-100 shadow-xl">
                    <figure><img className="h-56 " src="./teacher.jpg" alt="Teacher" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Teacher</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Guidline;
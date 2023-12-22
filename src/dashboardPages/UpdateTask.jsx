import { useForm } from "react-hook-form";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateTask = () => {

    const { register, handleSubmit } = useForm();
    const axiosPublic = useAxiosPublic();
    const taskDetails = useLoaderData();
    const navigate = useNavigate();
    const location = useLocation();
    const { _id, title, descriptions, level, time, date } = taskDetails;

    console.log(_id, title);

    const onSubmit = (data) => {
        console.log(data)

        const updateInfo ={
            title : data.title,
            descriptions: data.descriptions,
            level: data.level,
            time: data.time,
            date: data.date
        }

        axiosPublic.put(`/task/${_id}`, updateInfo)
            .then(res => {
                console.log('request updated to the data base', res);
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Task Request Update Successful",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    // window.location.reload();
                    navigate(location?.state ? location.state : '/dashboard');
                }
            })

    };

    return (
        <div>
            <div className="text-center text-base md:text-xl mt-10 md:mt-0">
                <h1><span className="text-green-600 font-bold">Create New Task</span> </h1>

            </div>

            <form className="p-5 w-full md:w-2/3 mx-auto" onSubmit={handleSubmit(onSubmit)}>
                {/* Title */}
                <label className="label">
                    <span className="label-text">Title</span>
                </label>
                <input defaultValue={title} {...register("title")} type="text" placeholder="Title" className="input input-bordered w-full mb-4" required />

                {/* descriptions */}
                <label className="label">
                    <span className="label-text">Descriptions</span>
                </label>
                <input defaultValue={descriptions} {...register("descriptions")} type="text" placeholder="Descriptions" className="input input-bordered w-full mb-4" required />


                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Priority Level</span>
                    </label>
                    <select
                        {...register("level")}
                        defaultValue={level}
                        className="select select-bordered w-full max-w-full">
                        <option disabled selected>Select Level</option>
                        <option value="Low">Low</option>
                        <option value="Moderate">Moderate</option>
                        <option value="High">High</option>

                    </select>
                </div>


                {/*  date */}
                <label className="label">
                    <span className="label-text">Date</span>
                </label>
                <input defaultValue={date} {...register("date")} type="date" className="input input-bordered w-full mb-4" required />

                {/*  time */}
                <label className="label">
                    <span className="label-text">Time</span>
                </label>
                <input defaultValue={time} {...register("time")} type="time" className="input input-bordered w-full mb-4" required />

                <div className="form-control mt-6">
                    <input className="btn btn-primary" type="submit" value="Update Task" />
                </div>

            </form>

        </div>
    );
};

export default UpdateTask;
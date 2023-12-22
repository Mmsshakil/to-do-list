import { useForm } from "react-hook-form";
import useAxiosPublic from "../hooks/useAxiosPublic";
import swal from "sweetalert";
import { ToastContainer, toast } from "react-toastify";

const CreateNewTask = () => {
    // console.log('create new task');

    const axiosPublic = useAxiosPublic();

    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data);

        axiosPublic.post('/tasks', data)
            .then(res => {
                console.log('task added to the data base');
                if (res.data.insertedId) {
                    toast.success('🦄 Wow so easy!', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                    // navigate(location?.state ? location.state : '/');
                    // window.location.reload();
                }
            })



    };

    return (
        <>
            <div>
                <div className="text-center text-base md:text-xl mt-10 md:mt-0">
                    <h1><span className="text-green-600 font-bold">Create New Task</span> </h1>

                </div>

                <form className="p-5 w-full md:w-2/3 mx-auto" onSubmit={handleSubmit(onSubmit)}>
                    {/* Title */}
                    <label className="label">
                        <span className="label-text">Title</span>
                    </label>
                    <input {...register("title")} type="text" placeholder="Title" className="input input-bordered w-full mb-4" required />

                    {/* descriptions */}
                    <label className="label">
                        <span className="label-text">Descriptions</span>
                    </label>
                    <input {...register("descriptions")} type="text" placeholder="Descriptions" className="input input-bordered w-full mb-4" required />


                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Priority Level</span>
                        </label>
                        <select
                            {...register("level")}
                            defaultValue={"Select Level"}
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
                    <input {...register("date")} type="date" className="input input-bordered w-full mb-4" required />

                    {/*  time */}
                    <label className="label">
                        <span className="label-text">Time</span>
                    </label>
                    <input {...register("time")} type="time" className="input input-bordered w-full mb-4" required />

                    <div className="form-control mt-6">
                        <input className="btn btn-primary" type="submit" value="Create Task" />
                    </div>

                </form>

            </div>
            <ToastContainer />
        </>
    );
};

export default CreateNewTask;
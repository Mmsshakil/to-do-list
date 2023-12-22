
import useAxiosPublic from "../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { NavLink } from "react-router-dom";

const PreviousTask = () => {

    const axiosPublic = useAxiosPublic();

    const { isPending, error, data: tasks = [], refetch } = useQuery({
        queryKey: ['tasks'],
        queryFn: async () => {
            const res = await axiosPublic.get('/tasks');
            return res.data;
        }
    })

    if (isPending) {
        return <div className="flex justify-center items-center h-[60vh]">
            <span className="loading loading-bars loading-lg text-error"></span>
        </div>
    }

    if (error) {
        return <div className="flex justify-center items-center h-[60vh]">
            <span className="loading loading-bars loading-lg text-error"></span>
        </div>
    }
    console.log(tasks);

    // delete donation request
    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosPublic.delete(`/tasks/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your request has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    return (
        <div className=" flex flex-col justify-center items-center mx-auto">
            <h1 className="text-lg font-bold">Total Task: {tasks.length}</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
                {
                    tasks?.map(task => <div key={task._id} className="card w-96 bg-base-100 shadow-xl">
                        <div className="p-4 flex flex-col justify-center items-center">
                            <h2 className="card-title">Title: {task.title}</h2>
                            <p>Description: {task.descriptions}</p>
                            <p className="font-bold">Level: {task.level}</p>
                            <div className="flex justify-center gap-3 items-center font-semibold">
                                <p>Date: {task.date}</p>
                                <p>Time: {task.time}</p>
                            </div>
                            <div className="card-actions justify-center my-2">
                                <NavLink to={`/dashboard/updateTask/${task._id}`} >
                                    <button className="btn btn-sm btn-info">Update</button>
                                </NavLink>

                                <button onClick={() => handleDelete(task._id)} className="btn btn-sm btn-error">Delete</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>

        </div>
    );
};

export default PreviousTask;
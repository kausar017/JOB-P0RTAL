import { useContext, useEffect, useState } from "react";
import Authcontext from "../../Authentication/context/AuthContext";
import bg from '../../assets/cool-background.svg';
import { MdOutlineDeleteForever } from "react-icons/md";
import { FaDollarSign } from "react-icons/fa6";
import axios from "axios";

const MyApplication = () => {

    const { user } = useContext(Authcontext)
    console.log(user);
    const [jobs, setJobs] = useState([])
    console.log(jobs);


    useEffect(() => {
        fetch(`http://localhost:5000/job-application?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setJobs(data)

            })
      
    }, [user])

    return (
        <div className="py-[110px]"
            style={{
                backgroundImage: `url(${bg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                // height: "100vh",
                width: "100%",
            }}>
            <div className="container mx-auto p-3">
                <h2 className="text-3xl">My Application: {jobs.length}</h2>
                <div className="overflow-x-auto rounded-3xl py-3">
                    <table className="table bg-white/50 backdrop-blur-lg border-2">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    <label>
                                        {/* <input type="checkbox" className="checkbox" /> */}
                                    </label>
                                </th>
                                <th>Company</th>
                                <th>Name</th>
                                <th>Job Type</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                jobs.map(job => <tr key={job._id}>
                                    <th>
                                        <label>
                                            <input type="checkbox" className="checkbox" />
                                        </label>
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src={job.company_logo}
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{job.title}</div>
                                                <div className="text-sm opacity-50">{job.location}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {job.hr_name}
                                        <br />
                                        <span className="badge badge-ghost badge-sm">{job?.salaryRange?.min}<FaDollarSign></FaDollarSign> -{job?.salaryRange?.max}<FaDollarSign></FaDollarSign> </span>
                                    </td>
                                    <td>{job.jobType}</td>
                                    <th>
                                        <button className="btn btn-sm btn-ghost"><MdOutlineDeleteForever size={20} color="red"></MdOutlineDeleteForever> </button>
                                    </th>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyApplication;
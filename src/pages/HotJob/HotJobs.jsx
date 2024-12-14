import { useContext, useEffect, useState } from "react";
import Authcontext from "../../Authentication/context/AuthContext";
import { FaDollarSign, FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

const HotJobs = () => {

    // const { user } = useContext(Authcontext)

    const [userData, setUserData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/jobs')
            .then(res => res.json())
            .then(data => {
                // setLoading(true)
                setUserData(data)
                console.log(data);

            })

    }, [])
    return (
        <div className="w-8/12 mx-auto py-10">
            <div className="text-center">
                <h1 className="text-4xl font-bold">Our Jobs</h1>
                <p className="text-lg text-gray-600">These jobs are currently running and will print "Job 1 is running..." and "Job 2 is running..</p>
            </div>
            <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 justify-center items-center gap-5 py-8">
                {
                    userData.map(data =>
                        <div key={data._id}>
                            <div className="card card-compact min-h-[400px] bg-base-100 border-2 transition hover:scale-110 overflow-hidden">
                                <div className="w-full mx-auto flex items-center">
                                    <div >
                                        <img
                                            className="p-2 w-[70px]"
                                            src={data.company_logo}
                                            alt="Shoes" />
                                    </div>
                                    <div>
                                        <h2 className="card-title">{data.company}</h2>
                                        <p className="flex items-center"><FaLocationDot></FaLocationDot> {data.location}</p>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <h2 className="card-title">{data.title}
                                        <div className="badge badge-secondary">NEW</div>
                                    </h2>
                                    <p>Discription:</p>
                                    <p >{data.description.slice(0, 80)}</p>
                                    <div className="divider"></div>
                                    <p>Requirements:</p>
                                    <div>
                                        {
                                            data?.requirements.map((req, index) =>
                                                <p key={req}>
                                                    {index + 1}) {req}
                                                </p>
                                            )
                                        }
                                    </div>
                                    <p className="flex items-center"><span className="font-bold">Salary:</span><FaDollarSign></FaDollarSign> {data.salaryRange.min} - {data.salaryRange.max} {data.salaryRange.currency} </p>
                                    <div className="card-actions justify-end">
                                        <Link to={`/detals/${data._id}`} className="btn btn-sm btn-outline hover:bg-cyan-700">Detals</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default HotJobs;
import { MdLocationOn } from "react-icons/md";
import { Link, useLoaderData } from "react-router-dom";
import bg from '../../assets/cool-background.svg'


const Jobditals = () => {

    const job = useLoaderData()
    console.log(job);

    const { _id, title, location, jobType, category, applicationDeadline, salaryRange, description, company, requirements, responsibilities, status, hr_email, hr_name, company_logo } = job;

    return (
        <div className="py-[110px]"
            style={{
                backgroundImage: `url(${bg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                // height: "100vh",
                width: "100%",
            }}
        >
            <div className="container mx-auto">
                <div className="backdrop-blur-lg border-2 rounded-xl m-5">
                    <div className="grid md:grid-cols-12 p-5">
                        <div className="md:col-span-4 flex flex-col justify-center items-center">
                            <img
                                src={company_logo}
                                className="w-44 rounded-lg shadow-2xl" />
                        </div>
                        <div className="md:col-span-8">
                            <h1 className="text-5xl font-bold text-white">{company}</h1>
                            <p className="flex items-center"><MdLocationOn></MdLocationOn> {location}</p>
                            <h3 className="text-xl font-bold">{title}</h3>
                            <p className="py-6 text-white">
                                {description}
                            </p>
                            <p>Catagory: {category}</p>
                            <p>JObtype: {jobType}</p>
                            <p>salaryRange: {salaryRange.min}- {salaryRange.max}</p>
                            <p className="flex items-center gap-1">status: {status == "active" ? <img className="w-5" src="https://img.icons8.com/?size=80&id=NKHieLHiK0rz&format=png" alt="" /> : <img className="w-5" src="https://img.icons8.com/?size=50&id=20978&format=png" alt="" />}</p>
                            <p className="font-bold">Requirements: </p>
                            <div>{requirements.map((req, index) =>
                                <p key={index}>
                                    {index + 1} ) {req}
                                </p>)

                            }</div>
                            <p className="font-bold">responsibilities: </p>
                            <div>
                                {responsibilities.map((res, index) =>
                                    <p key={index}>
                                        {index + 1} ) {res}
                                    </p>)

                                }
                            </div>
                            <p className="font-bold">ApplicationDeadline: {applicationDeadline}</p>
                            <p className="font-bold">Email: {hr_email}</p>
                            <p className="font-bold"> Name:{hr_name}</p>
                            <br />
                            <Link to={`/jobapply/${_id}`}>
                                <button className="btn btn-sm btn-outline hover:bg-[#505690]">Apply Now</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Jobditals;
import { useState } from 'react';
import addjob from '../../assets/Lottify/addjob.json'
import bg from '../../assets/cool-background.svg'
import Lottie from 'lottie-react';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';


const AddJob = () => {

    const navigat = useNavigate()
    const location = useLocation()
    const from = location?.state?.pathname || '/mypostedjob';


    const handaleSubmit = e => {
        e.preventDefault()
        const formData = new FormData(e.target);
        const initialData = Object.fromEntries(formData.entries())
        const { min, max, currency, ...newJob } = initialData
        console.log(newJob);
        newJob.salaryRange = { min, max, currency }
        newJob.requirements = newJob.requirements.split('\n')
        newJob.responsibilities = newJob.responsibilities.split('\n')
        console.log(newJob);

        fetch('http://localhost:5000/jobs', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newJob)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                Swal.fire('Succes', 'job Added succsfully', 'success')
                navigat(from)
            })
            .catch(error => {
                console.log(error);
                Swal.fire('jobs not added')

            })

    }




    return (
        <div className=''
            style={{
                backgroundImage: `url(${bg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                // height: "100vh",
                width: "100%",

            }}>
            <div className="container mx-auto md:flex p-3 justify-around py-[110px]">
                <div className='space-y-4'>
                    <h1 className="text-5xl text-center font-bold max-sm:text-white p-1">Add job now!</h1>
                    <Lottie className='max-w-96 max-sm:p-5' animationData={addjob}></Lottie>
                </div>

                <div className='card backdrop-blur-lg border-2 md:w-[600px] rounded-none'>
                    <h1 className="text-5xl text-center font-bold text-white p-1">Add Job</h1>
                    <form onSubmit={handaleSubmit} className="lg:card-body p-3">
                        {/* job title */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text lg:text-white">Job title</span>
                            </label>
                            <input type="text" placeholder="title" name='title' className="p-2 input-bordered" required />
                        </div>
                        {/* job location */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text lg:text-white">Job location</span>
                            </label>
                            <input type="text" placeholder="job location" name='location' className="p-2 input-bordered" required />
                        </div>
                        {/* jobType */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text lg:text-white">Job Type</span>
                            </label>
                            <select className="p-2 select-bordered w-full" name='jobType'>
                                <option disabled selected>Select Job-Type</option>
                                <option>Full Time</option>
                                <option>Intern</option>
                                <option>Prt-Time</option>
                            </select>
                        </div>
                        {/* category */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text lg:text-white">Job catagory</span>
                            </label>
                            <select className="p-2 select-bordered w-full" name='category'>
                                <option disabled selected>Select Job-catagory</option>
                                <option>Enginiearing</option>
                                <option>Markating</option>
                                <option>Finance</option>
                                <option>Teaching</option>
                            </select>
                        </div>

                        {/* applicationDeadline */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text lg:text-white">Application Deadline</span>
                            </label>
                            <input type="date" placeholder="Application Deadline" name='applicationDeadline' className="p-2 input-bordered" required />
                        </div>
                        {/* SalaryRange */}
                        <span className='pt-2 lg:text-white'>Salary Range</span>
                        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 items-center'>
                            <div className="form-control py-2">
                                <label className="label">
                                    <span className="label-text lg:text-white">Min</span>
                                </label>
                                <input type="text" placeholder="Min" name='min' className="p-2 input-bordered" required />
                            </div>
                            <div className="form-control py-2">
                                <label className="label">
                                    <span className="label-text lg:text-white">Max</span>
                                </label>
                                <input type="text" placeholder="Max" name='max' className="p-2 input-bordered" required />
                            </div>
                            {/* currency */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text lg:text-white">Currency</span>
                                </label>
                                <select className="p-2 select-bordered w-full" name='currency'>
                                    <option disabled selected>Currency</option>
                                    <option>BDT</option>
                                    <option>USD</option>
                                    <option>INR</option>
                                </select>
                            </div>
                        </div>
                        {/* description */}
                        <div className='form-control'>
                            <p className='label-text lg:text-white'>Discreption</p>
                            <textarea
                                placeholder="description"
                                name='description'
                                className="textarea textarea-bordered textarea-lg w-full rounded-none" required></textarea>
                        </div>
                        {/* job location */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text lg:text-white">Company Name</span>
                            </label>
                            <input type="text" placeholder="Company Name" name='company' className="p-2 input-bordered" required />
                        </div>
                        {/* requirements */}
                        <div className='form-control'>
                            <p className='label-text lg:text-white'>Requirements</p>
                            <textarea
                                placeholder="Requirements"
                                name='requirements'
                                className="textarea textarea-bordered textarea-lg w-full rounded-none" required></textarea>
                        </div>
                        {/* responsibilities */}
                        <div className='form-control'>
                            <p className='label-text lg:text-white'>responsibilities</p>
                            <textarea
                                placeholder="responsibilities"
                                name='responsibilities'
                                className="textarea textarea-bordered textarea-lg w-full rounded-none" required></textarea>
                        </div>
                        {/* HR Name */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text lg:text-white">HR Name</span>
                            </label>
                            <input type="text" placeholder="HR Name" name='hr_name' className="p-2 input-bordered" required />
                        </div>
                        {/* HR email */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text lg:text-white">HR Email</span>
                            </label>
                            <input type="email" placeholder="HR email" name='hr_email' className="p-2 input-bordered" required />
                        </div>
                        {/* company_logo */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text lg:text-white">Company Logo</span>
                            </label>
                            <input type="url" placeholder="logo url" name='company_logo' className="p-2 border-2 border-cyan-200" required />
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary rounded-none">Add Job</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddJob;
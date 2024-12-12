import { useParams } from 'react-router-dom';
import bg from '../../assets/cool-background.svg'
import Lottie from 'lottie-react';
import apply from '../../assets/Lottify/apply.json'
import { useContext } from 'react';
import Authcontext from '../../Authentication/context/AuthContext';
import Swal from 'sweetalert2';

const JobApply = () => {

    const { id } = useParams()
    console.log(id);
    const { user } = useContext(Authcontext)


    const handaleApply = e => {
        e.preventDefault()
        const form = e.target;
        const linked = form.linked.value;
        const github = form.github.value;
        const Resome = form.Resome.value;
        // console.log(linked, github, Resome);

        const jobapplicatoin = {
            job_id: id,
            applicant_email: user.email,
            linked,
            github,
            Resome
        }


        fetch('http://localhost:5000/job-application', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(jobapplicatoin)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.insertedId) {
                    Swal.fire('Success', 'Successfuly Applyid', 'success')
                }
            })
            .catch(error => {
                console.log(error);

            })
    }


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
            <div className='container mx-auto'>
                <div className="container mx-auto md:flex items-center p-3 justify-around py-[110px]">
                    <div className='space-y-4'>
                        <h1 className="text-5xl text-center font-bold max-sm:text-white p-1">Apply Now</h1>
                        <Lottie className='max-w-96 max-sm:p-5' animationData={apply}></Lottie>
                    </div>

                    <div className='card backdrop-blur-xl border-2 md:w-96 shrink-0  max-sm:m-3'>
                        <h1 className="text-5xl text-center font-bold text-white p-1">Apply</h1>
                        <form onSubmit={handaleApply} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text lg:text-white">LinedIn Url</span>
                                </label>
                                <input type="url" placeholder="Enter Linkedurl" name='linked' className="input input-bordered rounded-none" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text lg:text-white">Github Url</span>
                                </label>
                                <input type="url" placeholder="Enter Github Url" name='github' className="input input-bordered rounded-none" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text lg:text-white">Resome Url</span>
                                </label>
                                <input type="url" placeholder="Enter Resome Url" name='Resome' className="input input-bordered rounded-none" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Apply</button>
                            </div>

                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobApply;
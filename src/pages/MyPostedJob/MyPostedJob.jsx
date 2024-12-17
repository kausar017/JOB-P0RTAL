import { useContext, useEffect, useState } from 'react';
import bg from '../../assets/cool-background.svg';
import Authcontext from '../../Authentication/context/AuthContext';
import { MdOutlineDeleteForever } from 'react-icons/md';
import axios from 'axios';

const MyPostedJob = () => {


    const [myposetdData, setMyposetdData] = useState([])
    const { user } = useContext(Authcontext)
    // console.log(user);


    useEffect(() => {
        fetch(`http://localhost:5000/jobs?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setMyposetdData(data)
                console.log(data);
            })
            .catch(error => {
                console.log(error);
            })

    }, [user.email])

    return (
        <div
            style={{
                backgroundImage: `url(${bg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100vh",
                width: "100%",
            }}>
            <div className="py-[110px] container mx-auto">
                <h1>My Posted Jobs: {myposetdData.length} </h1>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>job title</th>
                                <th>Job Date Line</th>
                                <th>Favorite Color</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                myposetdData.map((data, index) =>
                                    <tr key={index}>
                                        <th>{index + 1}</th>
                                        <td>{data.title}</td>
                                        <td>{data.applicationDeadline}</td>
                                        <td>Quality Control Specialist</td>
                                        <button className='btn btn-sm btn-ghost'><MdOutlineDeleteForever size={20} color='red'></MdOutlineDeleteForever> </button>
                                    </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyPostedJob;
import React from 'react';
import { useParams } from 'react-router-dom';

const SingleTeachers = () => {
    const { id } = useParams();
    const teachersData = JSON.parse(sessionStorage.getItem('teacherInfo'))
    const teacher = teachersData.filter(row => row.idNumber === id); 
    return (
        <div className="container mt-5">
            {
                teacher.map(std => {
                    return (
                        <>
                            <div key={std.idNumber} className="shadow p-3 bg-white rounded">
                                <h3 className="ml-4 ">About me</h3>
                                <div className="row" >
                                    <div className="col-md-2 text-center profile ml-5">
                                        <img style={{ width: '165px' }} src={`data:image/png;base64,${std.images.img}`} alt="" />
                                    </div>
                                    <div className="col-md-9 d-flex align-items-center">
                                        <h2 className="text-secondary">{`${std.first} ${std.last}`}</h2>
                                    </div>
                                </div>
                                <div className="row mt-5">
                                    <div className="col-md-3">
                                        <h5 className="text-secondary">ID: </h5>
                                    </div>
                                    <div className="col-md-9">
                                        <strong>{std.idNumber}</strong>
                                    </div>
                                    <div className="col-md-3">
                                        <h5 className="text-secondary">Name: </h5>
                                    </div>
                                    <div className="col-md-9">
                                        <strong>{`${std.first} ${std.last}`}</strong>
                                    </div>
                                    <div className="col-md-3">
                                        <h5 className="text-secondary">Gender: </h5>
                                    </div>
                                    <div className="col-md-9">
                                        <strong>{std.gender}</strong>
                                    </div>
                                    <div className="col-md-3">
                                        <h5 className="text-secondary">Joining Date: </h5>
                                    </div>
                                    <div className="col-md-9">
                                        <strong>{std.joiningDate}</strong>
                                    </div>
                                    <div className="col-md-3">
                                        <h5 className="text-secondary">Religion: </h5>
                                    </div>
                                    <div className="col-md-9">
                                        <strong>{std.religion}</strong>
                                    </div>
                                    <div className="col-md-3">
                                        <h5 className="text-secondary">Department: </h5>
                                    </div>
                                    <div className="col-md-9">
                                        <strong>{std.department}</strong>
                                    </div>
                                    <div className="col-md-3">
                                        <h5 className="text-secondary">Last Qualification: </h5>
                                    </div>
                                    <div className="col-md-9">
                                        <strong>{std.qualification}</strong>
                                    </div>
                                    <div className="col-md-3">
                                        <h5 className="text-secondary">Email: </h5>
                                    </div>
                                    <div className="col-md-9">
                                        <strong>{std.email}</strong>
                                    </div>
                                    <div className="col-md-3">
                                        <h5 className="text-secondary">Address: </h5>
                                    </div>
                                    <div className="col-md-9">
                                        <strong>{std.address}</strong>
                                    </div>
                                    <div className="col-md-3">
                                        <h5 className="text-secondary">Phone: </h5>
                                    </div>
                                    <div className="col-md-9">
                                        <strong>{std.phone}</strong>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })
            }
        </div>
    );
};

export default SingleTeachers;
import React from 'react';
import { useParams } from 'react-router-dom';
import rows from '../../../../fakeData/rows';
import './SingleStudent.css';
const SingleStudent = () => {
    const { roll } = useParams();
    const student = rows.filter(row => row.roll === roll);
    console.log(student)
    return (
        <div className="container mt-5">
            {
                student.map(std => {
                    return (
                        <>
                            <div key={std.id} className="shadow p-3 bg-white rounded">
                                <h3 className="ml-4 ">About me</h3>
                                <div className="row" >
                                    <div className="col-md-2 text-center profile ml-5">
                                        <img style={{ width: '165px' }} src={std.photo} alt="" />
                                    </div>
                                    <div className="col-md-9 d-flex align-items-center">
                                        <h2 className="text-secondary">{std.name}</h2>
                                    </div>
                                </div>
                                <div className="row mt-5">
                                    <div className="col-md-3">
                                        <h5 className="text-secondary">Name: </h5>
                                    </div>
                                    <div className="col-md-9">
                                        <strong>{std.name}</strong>
                                    </div>
                                    <div className="col-md-3">
                                        <h5 className="text-secondary">Gender: </h5>
                                    </div>
                                    <div className="col-md-9">
                                        <strong>{std.gender}</strong>
                                    </div>
                                    <div className="col-md-3">
                                        <h5 className="text-secondary">Father Name: </h5>
                                    </div>
                                    <div className="col-md-9">
                                        <strong>{std.father}</strong>
                                    </div>
                                    <div className="col-md-3">
                                        <h5 className="text-secondary">Mother Name: </h5>
                                    </div>
                                    <div className="col-md-9">
                                        <strong>{std.mother}</strong>
                                    </div>
                                    <div className="col-md-3">
                                        <h5 className="text-secondary">Date of Birth: </h5>
                                    </div>
                                    <div className="col-md-9">
                                        <strong>{std.dob}</strong>
                                    </div>
                                    <div className="col-md-3">
                                        <h5 className="text-secondary">Religion: </h5>
                                    </div>
                                    <div className="col-md-9">
                                        <strong>{std.religion}</strong>
                                    </div>
                                    <div className="col-md-3">
                                        <h5 className="text-secondary">Father Occuption: </h5>
                                    </div>
                                    <div className="col-md-9">
                                        <strong>{std.fatherOccuption}</strong>
                                    </div>
                                    <div className="col-md-3">
                                        <h5 className="text-secondary">Email: </h5>
                                    </div>
                                    <div className="col-md-9">
                                        <strong>{std.email}</strong>
                                    </div>
                                    <div className="col-md-3">
                                        <h5 className="text-secondary">Admission Date: </h5>
                                    </div>
                                    <div className="col-md-9">
                                        <strong>{std.admissionDate}</strong>
                                    </div>
                                    <div className="col-md-3">
                                        <h5 className="text-secondary">Department: </h5>
                                    </div>
                                    <div className="col-md-9">
                                        <strong>{std.department}</strong>
                                    </div>
                                    <div className="col-md-3">
                                        <h5 className="text-secondary">Section: </h5>
                                    </div>
                                    <div className="col-md-9">
                                        <strong>{std.section}</strong>
                                    </div>
                                    <div className="col-md-3">
                                        <h5 className="text-secondary">Roll: </h5>
                                    </div>
                                    <div className="col-md-9">
                                        <strong>{std.roll}</strong>
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

export default SingleStudent;
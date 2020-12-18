import React from 'react';
import { useParams } from 'react-router-dom';
import './SingleStudent.css';
import studentImage from '../../../../image/img_avatar.jpg'
const SingleStudent = () => {
    const { roll } = useParams();
    const studentData = JSON.parse(sessionStorage.getItem('studentInfo'))
    const student = studentData.filter(row => row.roll === roll);   
    return (
        <div className="container mt-5">
            {
                student.map(std => {
                    return (
                        <>
                            <div key={std.admissionId} className="shadow p-3 bg-white rounded">
                                <h3 className="ml-4 ">About me</h3>
                                <div className="row" >
                                    <div className="col-md-2 text-center profile ml-5">
                                        <img style={{ width: '165px' }} src={studentImage} alt="" />
                                    </div>
                                    <div className="col-md-9 d-flex align-items-center">
                                        <h2 className="text-secondary">{`${std.name}`}</h2>
                                    </div>
                                </div>
                                <div className="row mt-5">
                                    <div className="col-md-3">
                                        <h5 className="text-secondary">Name: </h5>
                                    </div>
                                    <div className="col-md-9">
                                        <strong>{`${std.name} `}</strong>
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
                                        <strong>{std.fName}</strong>
                                    </div>
                                    <div className="col-md-3">
                                        <h5 className="text-secondary">Mother Name: </h5>
                                    </div>
                                    <div className="col-md-9">
                                        <strong>{std.mName}</strong>
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
                                        <h5 className="text-secondary">Father Occupation: </h5>
                                    </div>
                                    <div className="col-md-9">
                                        <strong>{std.fOccupation}</strong>
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
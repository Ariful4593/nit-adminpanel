import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Admin.css'
import { faUserGraduate, faUser, faUserFriends, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import CountUp from 'react-countup';
const headerData = [
    { id: 1, title: 'Student', subtitle: '3000', icon: faUserGraduate, font: '#3CB878', bgColor: '#D1F3E0' },
    { id: 2, title: 'Teachers', subtitle: '2250', icon: faUser, font: '#3F7AFC', bgColor: '#E1F1FF' },
    { id: 3, title: 'Parents', subtitle: '5690', icon: faUserFriends, font: '#FFA536', bgColor: '#FFF2D8' },
    { id: 4, title: 'Earnings', subtitle: '193000', icon: faDollarSign, font: '#FFEAEA', bgColor: '#FF8383' },
]
const Admin = () => {

    return (
        <>
            {
                headerData.map(item => {
                    return (
                        <div className="col-md-3 mt-4" key={item.id}>
                            <div className="row shadow p-3 ml-1 bg-white rounded">
                                <div className="col-md-6 p-0" style={{ fontSize: '70px', textAlign: 'center', borderRadius: '60px', backgroundColor: `${item.bgColor}`, color: `${item.font}` }}>
                                    <FontAwesomeIcon style={{ fontSize: '45px', marginBottom: '8px' }} icon={item.icon} />
                                </div>
                                <div className="col-md-6" style={{ padding: '25px 0px 0px 15px' }}>
                                    <h5 className="card-title">{item.title}</h5>
                                    <h4 className="card-subtitle mb-2 text-muted">{<CountUp start={1} end={parseInt(item.subtitle)} /> }</h4>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            

        </>

    );
};

export default Admin;
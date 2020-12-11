import React from 'react';
import {
    PieChart, Pie, Tooltip, Cell
} from 'recharts';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Student.css'
const COLORS = ['#0088FE', '#E69500', '#FFBB28', '#FF8042'];

const Student = () => {
    const data02 = [
        { name: 'Female', value: 400 }, { name: 'Male', value: 2600 },
    ];
    return (
        <div className="row">
            <div className="col-md-6 pr-0">
                <div className="shadow p-3 bg-white rounded w-100">
                    <h1>Student</h1>
                    <PieChart className="w-100 " width={420} height={300}>
                        <Pie dataKey="value" className="w-100" data={data02} cx={230} cy={100} innerRadius={40} outerRadius={80} fill="#E69500" >
                            {
                                data02.map((entry, index) => {
                                    return(
                                        <Cell key={index} className="w-100" fill={COLORS[index % COLORS.length]} />
                                    )
                                })
                            }
                        </Pie>
                        <Tooltip />
                    </PieChart>
                    <div className="row">
                        <div className="col-md-6 border-right">
                            <hr style={{ width: '65px', margin: '0', height: '5px', background: '#417DFC', borderRadius: '10px' }} />
                            <h5 className="text-secondary ">Female Student</h5>
                            <h4>400</h4>
                        </div>

                        <div className="col-md-6">
                            <hr style={{ width: '65px', margin: '0', height: '5px', background: '#FFAA01', borderRadius: '10px' }} />
                            <h5 className="text-secondary">Male Students</h5>
                            <h4>2600</h4>
                        </div>
                    </div>
                </div>

            </div>
            <div className="col-md-6 pr-0">
                {/* <h2 className="pt-4 mb-4 ml-4">Event Calendar</h2> */}
                <Calendar
                    // onChange={handleDateChange}
                    value={new Date()}
                    style={{ width: '100%', fontSize: '23px' }}
                    className="react-calendar w-100 h-100 shadow pl-3 bg-white rounded w-100 border-0"
                />
            </div>
        </div>

    );
};

export default Student;
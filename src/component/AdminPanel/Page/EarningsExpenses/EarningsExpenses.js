import React from 'react';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import {
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, BarChart, Bar, Legend
} from 'recharts';

const EarningsExpenses = () => {
    const earningData = [
        { name: 'SAT', uv: 4000, pv: 2400, amt: 2400 },
        { name: 'SUN', uv: 3000, pv: 1398, amt: 2210 },
        { name: 'MON', uv: 2000, pv: 9800, amt: 2290 },
        { name: 'THU', uv: 2780, pv: 3908, amt: 2000 },
        { name: 'WED', uv: 1890, pv: 4800, amt: 2181 },
        { name: 'TUE', uv: 2390, pv: 3800, amt: 2500 },
        { name: 'FRI', uv: 3490, pv: 4300, amt: 2100 },
    ];
    const expensesData = [
        { name: 'JAN', uv: 4000, pv: 2400, amt: 2400 },
        { name: 'FEB', uv: 3000, pv: 1398, amt: 2210 },
        { name: 'MAR', uv: 2000, pv: 9800, amt: 2290 },

    ];
    return (
        <>


            <div className="row">

                <div className="col-md-7 w-100 h-100">
                    <div className="w-100 h-100 shadow p-3 bg-white rounded">
                        <h1 className="ml-4">Earnings</h1>
                        <div className="row text-center">
                            <div className="col-md-6">
                                <h4> <FiberManualRecordIcon style={{ color: '#417DFC' }} /> Total Collection</h4>
                                <h4 className="pl-3">$12000</h4>
                            </div>
                            <div className="col-md-6">
                                <h4> <FiberManualRecordIcon style={{ color: '#FF0000' }} /> Fees Collection</h4>
                                <h4 className="pl-3">$15000</h4>
                            </div>
                        </div>
                        <AreaChart className=" h-100 w-100" width={555} height={435} data={earningData}

                            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Area type='monotone' dataKey='uv' stackId="1" stroke='#8884d8' fill='#8884d8' />
                            <Area type='monotone' dataKey='pv' stackId="1" stroke='#82ca9d' fill='#82ca9d' />
                            <Area type='monotone' dataKey='amt' stackId="1" stroke='#ffc658' fill='#FF0000' />
                        </AreaChart>
                    </div>

                </div>
                <div className="col-md-5 shadow p-3 bg-white rounded" style={{ padding: '20px', }}>
                    <div className="">
                        <h4 className="text-center">Expenses</h4>
                        <div className="row text-center">
                            <div className="col-md-4" >
                                <h6 className="" style={{ borderBottom: '3px solid #1DE9B6' }}>Jan 2021</h6>
                                <h6>$15,000</h6>
                            </div>
                            <div className="col-md-4">
                                <h6 style={{ borderBottom: '3px solid #417DFC' }}>Feb 2021</h6>
                                <h6>$10,000</h6>
                            </div>
                            <div className="col-md-4">
                                <h6 style={{ borderBottom: '3px solid #FFAA01' }}>March 2021</h6>
                                <h6>$8,000</h6>
                            </div>
                        </div>

                        <BarChart className="" width={400} height={435} data={expensesData}
                            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="pv" fill="#8884d8" />
                            <Bar dataKey="uv" fill="#82ca9d" />
                        </BarChart>
                    </div>

                </div>

            </div>


        </>
    );
};

export default EarningsExpenses;
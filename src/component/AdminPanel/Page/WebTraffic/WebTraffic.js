import React from 'react';
import Notice from './Notice';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
const WebTraffic = () => {
    return (
        <div className="row">

            <div className="col-md-6 pr-0">
                <div className="shadow p-3 bg-white rounded h-100">
                    <h1>Web Traffic</h1>
                    <h5 className="text-secondary">Unique Visitors</h5>
                    <h4>2,590</h4>
                    <div className="row mt-4" >
                        <div className="col-md-6">
                            <h5 className="font-weight-bold"><FiberManualRecordIcon style={{ color: '#1DE9B6' }} /> Direct</h5>
                        </div>
                        
                        <div className="col-md-3">
                            15,300
                        </div>
                        <div className="col-md-3">
                            50%
                        </div>
                    </div>
                    <hr/>
                    <div className="row mt-4 ">
                        <div className="col-md-6">
                            <h5 className="font-weight-bold"><FiberManualRecordIcon style={{ color: '#417DFC' }} /> Search</h5>
                        </div>
                        <div className="col-md-3">
                        6,120
                        </div>
                        <div className="col-md-3">
                        27%
                        </div>
                    </div>
                    <hr/>
                    <div className="row mt-4">
                        <div className="col-md-6">
                            <h5 className="font-weight-bold"><FiberManualRecordIcon style={{ color: '#FF0000' }} /> Social</h5>
                        </div>
                        <div className="col-md-3">
                        3,245
                        </div>
                        <div className="col-md-3">
                        23%
                        </div>
                    </div>
                    
                </div>

            </div>
            <div className="col-md-6 pr-0">
                <div className="shadow p-3 bg-white rounded ">
                    <h1>Notice Board</h1>
                    <Notice ></Notice>
                </div>

            </div>
        </div>
    );
};

export default WebTraffic;
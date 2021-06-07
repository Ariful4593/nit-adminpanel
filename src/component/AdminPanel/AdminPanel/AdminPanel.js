import React, { useState } from 'react';
import { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import collegeInfo from '../../../fakeData/collegeInfo/collegeInfo';
import Navbar from '../Navbar/Navbar';
import './AdminPanel.css'
import StudentTable from '../StudentTable/StudentTable';
import Admin from '../Page/Admin';
import EarningsExpenses from '../Page/EarningsExpenses/EarningsExpenses';
import Student from '../Page/Student/Student';
import WebTraffic from '../Page/WebTraffic/WebTraffic';
import FollowUs from '../Page/FollowUs/FollowUs';
import Copyright from '../Page/Copyright/Copyright';
import AddNewStudentForm from '../Page/AddNewStudentForm/AddNewStudentForm';
import AddNewTeacher from '../Page/AddNewTeacher/AddNewTeacher';
import AllTeachers from '../Page/Teacher/AllTeachers';
import NoticeBoard from '../Page/Notice/NoticeBoard';
import AllStudent from '../Page/AllStudent/AllStudent';
import DetectStudent from '../Page/DetectStudent/DetectStudent';
import Computer from '../../Technology/Computer/Computer';
import Civil from '../../Technology/Civil/Civil';
import Mechanical from '../../Technology/Mechanical/Mechanical';
import Textile from '../../Technology/Textile/Textile';
const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
        marginLeft: '10px'
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
}));
const AdminPanel = () => {
    const [category, setCategory] = useState('');
    useEffect(() => {
        setCategory('Admin')
    }, [])

    const handleSidebar = (stats) => {
        setCategory(stats)
    }
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);
    const [registerStudent, setRegisterStudent] = useState([])
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };


    useEffect(() => {
        fetch('https://secret-headland-48345.herokuapp.com/getRegisterStudent')
            .then(res => res.json())
            .then(data => {
                setRegisterStudent(data)
                sessionStorage.setItem('studentInfo', JSON.stringify(data))
            })
    }, [])
    useEffect(() => {
        fetch('https://secret-headland-48345.herokuapp.com/registerTeacher')
            .then(res => res.json())
            .then(data => {
                sessionStorage.setItem('teacherInfo', JSON.stringify(data))
            })
    }, [])
    useEffect(() => {
        fetch('https://secret-headland-48345.herokuapp.com/getUser')
            .then(res => res.json())
            .then(data => sessionStorage.setItem('attendenceData', JSON.stringify(data)))
    }, [])
    return (
        <div className="row w-100">
            <div className="col-2 pr-xl-0" style={{ backgroundColor: '#042954', color: 'white', }}>
                <h1 className="text-white nit-home" style={{ height: '64px', padding: '7px 10px 0px 65px', cursor: 'pointer' }}>NIT</h1>
                <div className={classes.root}>
                    {
                        collegeInfo.map(items => {
                            const listData = items.listItem;
                            return (
                                <Accordion
                                    expanded={expanded === `${items.expandType}`}
                                    key={items.id}
                                    onChange={handleChange(`${items.expandType}`)}
                                    style={{ background: 'none', color: 'white' }}
                                >
                                    <AccordionSummary
                                        expandIcon={
                                            <ExpandMoreIcon style={{ color: 'white' }} />
                                        }
                                        aria-controls={`${items.expandType}bh-content`}
                                        id={`${items.expandType}bh-header`}

                                    >
                                        <FontAwesomeIcon icon={items.icon} />
                                        <Typography className={classes.heading}>  {items.category}</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails style={{ background: '#0c1639' }}>
                                        <ul style={{ padding: '0px 0px 0px 10px' }}>
                                            {
                                                listData.map(data => (
                                                    <li key={data} style={{ cursor: 'pointer' }} onClick={() => handleSidebar(`${data}`)}>{data}</li>
                                                ))
                                            }
                                        </ul>
                                    </AccordionDetails>
                                </Accordion>
                            )
                        })
                    }
                </div>
            </div>
            <div className="col-10" style={{ background: '#F0F1F3' }}>

                <div className="row" >
                    <Navbar></Navbar>
                </div>
                {
                    category === 'Admin' && 
                    <>
                        <div className="container">
                            <div className="row ">
                                <Admin></Admin>
                            </div>
                        </div>
                        <div className="container mt-5 ">
                            <EarningsExpenses></EarningsExpenses>
                        </div>
                        <div className="container mt-3">
                            <Student></Student>
                        </div>

                        <div className="container mt-3">
                            <WebTraffic></WebTraffic>
                        </div>

                        <div className="container mt-3">
                            <FollowUs></FollowUs>
                        </div>
                        <div className="container mt-5">
                            <Copyright></Copyright>
                        </div>
                    </>
                }
                {
                    category === 'Students' && <div className="row"><StudentTable registerStudent={registerStudent} /></div>
                }
                {
                    category === 'Admission Form' && <AddNewStudentForm></AddNewStudentForm>
                }
                {
                    category === 'Add Teacher' && <AddNewTeacher />
                }
                {
                    category === 'All Teacher' && <AllTeachers />
                }
                {
                    category === 'Notice Board' && <NoticeBoard category={category} />
                }
                {
                    category === 'All Student' && <AllStudent registerStudent={registerStudent} />
                }
                {
                    category === 'Teachers' && <AllTeachers />
                }
                {
                    category === 'Computer' && <Computer registerStudent={registerStudent} />
                }
                {
                    category === 'Civil' && <Civil registerStudent={registerStudent} />
                }
                {
                    category === 'Machanical' && <Mechanical registerStudent={registerStudent} />
                }
                {
                    category === 'Textile' && <Textile registerStudent={registerStudent} />
                }
                {
                    category === 'Detect Student' && <DetectStudent />
                }

            </div>

        </div>

    );
};

export default AdminPanel;
import React, { useState } from 'react';
import { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartLine, faUser, faBookReader, faUserCircle, faArrowsAlt, faCalculator, faUsersCog, faCogs, faClipboard, faBell } from '@fortawesome/free-solid-svg-icons';
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

const collegeInfo = [
    { id: 1, category: 'Dashboard', expandType: 'panel1', icon: faChartLine, list1: 'Admin', list2: 'Students', list3: 'Teachers' },
    { id: 2, category: 'Student', expandType: 'panel2', icon: faUser, list1: 'All Student', list2: 'Admission Form', list3: 'Student Stipend' },
    { id: 3, category: 'Teachers', expandType: 'panel3', icon: faBookReader, list1: 'All Teacher', list2: 'Add Teacher', },
    { id: 4, category: 'Account', expandType: 'panel4', icon: faUserCircle, list1: 'All Fees Collection', list2: 'Expenses', list3: 'Add Expenses', list4: 'Fees Added' },
    {
        id: 5, category: 'Department', expandType: 'panel5', icon: faArrowsAlt,
        list1: 'Computer ', list2: 'Civil ', list3: 'EEE ', list4: 'Mechanical ', list5: 'Textile ', list6: 'Add New Department'
    },

    { id: 6, category: 'Subject', expandType: 'panel6', icon: faCalculator },

    { id: 7, category: 'Class Routine', expandType: 'panel7', icon: faUsersCog, list1: 'All Fees Collection', list2: 'Expenses', list3: 'Add Expenses' },

    { id: 8, category: 'Attendence', expandType: 'panel8', icon: faCogs, list1: 'Computer', list2: 'Civil', list3: 'Machanical', list4: 'Textile', list5: 'Detect Student' },

    { id: 9, category: 'Exam', expandType: 'panel9', icon: faClipboard, list1: 'Class Test', list2: 'Mid Term', list3: 'Final Exam' },

    { id: 10, category: 'Notice', expandType: 'panel10', icon: faBell, list1: 'Notice Board' },

]
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
                // console.log(data)
                setRegisterStudent(data)
                sessionStorage.setItem('studentInfo', JSON.stringify(data))
            })
    }, [])
    useEffect(() => {
        fetch('https://secret-headland-48345.herokuapp.com/registerTeacher')
            .then(res => res.json())
            .then(data => {
                console.log(data)
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
                <h1 className="text-white nit-home" style={{height: '64px', padding: '7px 10px 0px 65px', cursor: 'pointer' }}>NIT</h1>
                <div className={classes.root}>
                    {
                        collegeInfo.map(items => {
                            return (
                                <Accordion expanded={expanded === `${items.expandType}`} key={items.id} onChange={handleChange(`${items.expandType}`)} style={{ background: 'none', color: 'white' }} >
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon style={{ color: 'white' }} />}
                                        aria-controls={`${items.expandType}bh-content`}
                                        id={`${items.expandType}bh-header`}

                                    ><FontAwesomeIcon icon={items.icon} />
                                        <Typography className={classes.heading}>  {items.category}</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails style={{ background: '#0c1639' }}>
                                        <ul style={{ padding: '0px 0px 0px 10px' }}>
                                            <li style={{ cursor: 'pointer' }} onClick={() => handleSidebar(`${items.list1}`)}>{items.list1}</li>
                                            <li style={{ cursor: 'pointer' }} onClick={() => handleSidebar(`${items.list2}`)}>{items.list2}</li>
                                            <li style={{ cursor: 'pointer' }} onClick={() => handleSidebar(`${items.list3}`)}>{items.list3}</li>
                                            <li style={{ cursor: 'pointer' }} onClick={() => handleSidebar(`${items.list4}`)} >{items.list4}</li>
                                            <li style={{ cursor: 'pointer' }} onClick={() => handleSidebar(`${items.list5}`)} >{items.list5}</li>
                                            <li style={{ cursor: 'pointer' }} onClick={() => handleSidebar(`${items.list6}`)} >{items.list6}</li>
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
                    category === 'Admin' && <>
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
                    category === 'Computer' && <Computer registerStudent={registerStudent}  />
                }
                {
                    category === 'Civil' && <Civil registerStudent={registerStudent}  />
                }
                {
                    category === 'Machanical' && <Mechanical registerStudent={registerStudent}  />
                }
                {
                    category === 'Textile' && <Textile registerStudent={registerStudent}  />
                }
                {
                    category === 'Detect Student' && <DetectStudent />
                }
                
            </div>

        </div>

    );
};

export default AdminPanel;
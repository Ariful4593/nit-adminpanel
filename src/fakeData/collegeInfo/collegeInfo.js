import { faChartLine, faUser, faBookReader, faUserCircle, faArrowsAlt, faCalculator, faUsersCog, faCogs, faClipboard, faBell } from '@fortawesome/free-solid-svg-icons';
const collegeInfo = [
    { id: 1, category: 'Dashboard', expandType: 'panel1', icon: faChartLine, listItem: ['Admin', 'Students', 'Teachers']},
    { id: 2, category: 'Student', expandType: 'panel2', icon: faUser, listItem: ['All Student', 'Admission Form', 'Student Stipend']},
    { id: 3, category: 'Teachers', expandType: 'panel3', icon: faBookReader, listItem: ['All Teacher', 'Add Teacher']},
    { id: 4, category: 'Account', expandType: 'panel4', icon: faUserCircle, listItem: ['All Fees Collection', 'Expenses', 'Add Expenses', 'Fees Added']},
    {
        id: 5, category: 'Department', expandType: 'panel5', icon: faArrowsAlt,listItem: ['Computer', 'Civil', 'EEE', 'Mechanical', 'Textile', 'Add New Department']
    },

    { id: 6, category: 'Subject', expandType: 'panel6', icon: faCalculator, listItem: ['Programming In Java'] },

    { id: 7, category: 'Class Routine', expandType: 'panel7', icon: faUsersCog,listItem: ['All Fees Collection', 'Expenses', 'Add Expenses']},

    { id: 8, category: 'Attendence', expandType: 'panel8', icon: faCogs, listItem:['Computer', 'Civil', 'Mechanical', 'Textile', 'Detect Student']},

    { id: 9, category: 'Exam', expandType: 'panel9', icon: faClipboard,listItem: ['Class Test', 'Mid Term', 'Final Exam']},

    { id: 10, category: 'Notice', expandType: 'panel10', icon: faBell, listItem: ['Notice Board']},

]

export default collegeInfo;
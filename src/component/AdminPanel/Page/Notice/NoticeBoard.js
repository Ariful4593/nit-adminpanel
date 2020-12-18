import { TextField } from '@material-ui/core';
import React from 'react';
import { useState } from 'react';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

import './NoticeBoard.css';
import Notice from '../WebTraffic/Notice';
// import Button from '@material-ui/core/Button';
// import Snackbar from '@material-ui/core/Snackbar';
// import MuiAlert from '@material-ui/lab/Alert';
// import { makeStyles } from '@material-ui/core/styles';

// function Alert(props) {
//     return <MuiAlert elevation={6} variant="filled" {...props} />;
// }

// const useStyles = makeStyles((theme) => ({
//     root: {
//         width: '100%',
//         '& > * + *': {
//             marginTop: theme.spacing(2),
//         },
//     },
// }));
const NoticeBoard = ({ category }) => {
    const [today, setToday] = useState({
        day: new Date(),
    })
    const [formData, setFormData] = useState({
        title: '',
        postedBy: 'Admin',
        date: today.day.toLocaleString(),
    })

    const handleChange = (e) => {
        const newForm = { ...formData };
        newForm[e.target.name] = e.target.value;
        setFormData(newForm)
    }
    const handleSubmit = (e) => {
        fetch('https://secret-headland-48345.herokuapp.com/adminPost', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(data => console.log(data))
            document.getElementById('noticeForm').reset()

        e.preventDefault()
        // window.location.replace(window.location.href.split('#')[0]);

    }
    // const classes = useStyles();
    // const [open, setOpen] = React.useState(false);

    // const handleClick = () => {
    //     setOpen(true);
    // };

    // const handleClose = (event, reason) => {
    //     if (reason === 'clickaway') {
    //         return;
    //     }

    //     setOpen(false);
    // };

    return (
        <div className="container mt-5">
            <h2>Create a Notice</h2>
            <form id="noticeForm">
                <div className="row">
                    <div className="col-md-6 mt-4">
                        <TextField className="w-100 h-100" onBlur={handleChange} name="title" id="outlined-basic" variant="outlined" label="Title" />
                    </div>
                    <div className="col-md-3 mt-4">
                        <TextField className="w-100" onBlur={handleChange} name="posted" id="outlined-basic" value="Admin" variant="outlined" label="Posted By" />
                    </div>
                    <div className="col-md-3 mt-4">
                        <TextField className="w-100" onBlur={handleChange} name="date" id="outlined-basic" value={today.day.toLocaleString()} variant="outlined" label="Date" />
                    </div>
                    <div className="col-md-12 mt-4">
                        <TextareaAutosize aria-label="minimum height" id="outlined-basic" variant="outlined" onBlur={handleChange} className="w-100" name="description" rowsMin={8} placeholder="Post content goes here..." />
                    </div>

                </div>
                <div className="row mt-2">
                    <input type="submit" className="btn btn-light save text-white ml-3" value="Save" onClick={handleSubmit} />
                    <input type="reset" className="btn btn-light reset text-white ml-3" value="Reset" />
                </div>
            </form>
            <div className="row mt-5">
                <Notice category={category} />
            </div>
        </div>
    );
};

export default NoticeBoard;
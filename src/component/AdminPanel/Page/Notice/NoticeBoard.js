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
const NoticeBoard = ({category}) => {
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
        console.log(formData)
        
        fetch('http://localhost:4000/adminPost', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(data => console.log(data))
            
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
            <div className="row">
                <div className="col-md-6 mt-4">
                    <TextField className="w-100" onBlur={handleChange} name="title" id="outlined-basic" variant="outlined" label="Title" />
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
                <button type="button" className="btn btn-light save text-white ml-3" onClick={handleSubmit} >Save</button>
                <button type="button" className="btn btn-light reset text-white ml-3" >Reset</button>
            </div>

            <div className="row mt-5">
                <Notice category={category} />
            </div>
            {/* <div className={classes.root}>
                <Button variant="outlined" onClick={handleClick}>
                    Open success snackbar
                </Button>
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success">
                        This is a success message!
                </Alert>
                </Snackbar>
                <Alert severity="error">This is an error message!</Alert>
                <Alert severity="warning">This is a warning message!</Alert>
                <Alert severity="info">This is an information message!</Alert>
                <Alert severity="success">This is a success message!</Alert>
            </div> */}
        </div>
    );
};

export default NoticeBoard;
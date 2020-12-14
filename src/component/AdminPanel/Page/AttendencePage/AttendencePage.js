import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import AttendenceTable from './AttendenceTable';
import { useEffect } from 'react';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
}));
const AttendencePage = () => {
    const classes = useStyles();
    const [roll, setRoll] = useState({})
    const [rollNumber, setRollNumber] = useState(false)
    const handleRoll = (e) => {
        if (e.target.name === 'roll') {
            const newRoll = { ...roll }
            newRoll.roll = e.target.value;
            setRollNumber(true)
            setRoll(newRoll);
        }
    }
    const submitRoll = () => {
        fetch(`https://secret-headland-48345.herokuapp.com/user`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(roll)
        })
    }
    const userData = JSON.parse(sessionStorage.getItem('attendenceData'))
    const today = new Date();
    console.log(today.toLocaleDateString())

    // setInterval(() => {
    //     const formData = new FormData();
    //     formData.append('today', today.toLocaleDateString())
    //     fetch(`https://secret-headland-48345.herokuapp.com/absentUser`, {
    //         method: 'POST',
    //         body: formData
    //     })
    // }, 10000)
    console.log(userData)
    

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="grouped-select">Department</InputLabel>
                        <Select defaultValue="" id="grouped-select">
                            <MenuItem value="">
                                <em>Computer</em>
                            </MenuItem>
                            <ListSubheader>8th Semester</ListSubheader>
                            <MenuItem value={1}>CMT-A</MenuItem>
                            <MenuItem value={2}>CMT-B</MenuItem>
                            <ListSubheader>7th Semester</ListSubheader>
                            <MenuItem value={3}>CMT-A</MenuItem>
                            <MenuItem value={4}>CMT-B</MenuItem>
                            <ListSubheader>6th Semester</ListSubheader>
                            <MenuItem value={1}>CMT-A</MenuItem>
                            <MenuItem value={2}>CMT-B</MenuItem>
                            <ListSubheader>5th Semester</ListSubheader>
                            <MenuItem value={3}>CMT-A</MenuItem>
                            <MenuItem value={4}>CMT-B</MenuItem>
                            <ListSubheader>4th Semester</ListSubheader>
                            <MenuItem value={1}>CMT-A</MenuItem>
                            <MenuItem value={2}>CMT-B</MenuItem>
                            <ListSubheader>3rd Semester</ListSubheader>
                            <MenuItem value={3}>CMT-A</MenuItem>
                            <MenuItem value={4}>CMT-B</MenuItem>
                            <ListSubheader>2nd Semester</ListSubheader>
                            <MenuItem value={1}>CMT-A</MenuItem>
                            <MenuItem value={2}>CMT-B</MenuItem>
                            <ListSubheader>1st Semester</ListSubheader>
                            <MenuItem value={3}>CMT-A</MenuItem>
                            <MenuItem value={4}>CMT-B</MenuItem>
                        </Select>
                    </FormControl>
                </div>
            </div>
            <div className="row">
                <AttendenceTable />
            </div>
            <div className="row mt-5">
                <input type="text" id="rollNumber" name="roll" onBlur={handleRoll} />
                <button onClick={submitRoll}>Submit</button>
            </div>
        </div>
    );
};

export default AttendencePage;
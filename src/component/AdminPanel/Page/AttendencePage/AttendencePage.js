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
        fetch(`http://localhost:4000/user`, {
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
    //     fetch(`http://localhost:4000/absentUser`, {
    //         method: 'POST',
    //         body: formData
    //     })
    // }, 10000)
    console.log(userData)
    useEffect(() => {
        for (let index = 0; index < userData.length; index++) {
            const element = userData[index].present;
            for (let i = 0; i < element.length; i++) {
                const el = element[i].date;
                if (el === today.toLocaleDateString()) {
                    if (el) {
                        // console.log(el)
                    }

                }
                else {
                    // if (rollNumber === false && today.getMinutes() >= 33) {
                    //     fetch(`http://localhost:4000/absentUser`, {
                    //         method: 'POST',
                    //         headers: { 'Content-Type': 'application/json' },
                    //         body: JSON.stringify(el)
                    //     })
                    // }
                    console.log(el)
                }

            }
            // console.log(element)
        }
        // const data = userData.filter(pd => pd.present.date)
        // console.log(data)
    }, [])

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
            <div className="row">
                <input type="text" id="rollNumber" name="roll" onBlur={handleRoll} />
                <button onClick={submitRoll}>Submit</button>
            </div>
        </div>
    );
};

export default AttendencePage;
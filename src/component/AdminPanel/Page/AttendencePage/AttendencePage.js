import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import AttendenceTable from './AttendenceTable';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
}));
const AttendencePage = () => {
    const classes = useStyles();

    const userData = JSON.parse(sessionStorage.getItem('attendenceData'))
    const today = new Date();
    console.log(today.toLocaleDateString())
    console.log(userData)

    const [currentCategory, setCurrentCategory] = useState({})

    const handleSection = (section, semester) => {
        console.log(section, semester)
        const newCurrentCategory = {...currentCategory}
        newCurrentCategory.section = section;
        newCurrentCategory.semester = semester
        setCurrentCategory(newCurrentCategory)
    }

    const sectionArray = [
        { id: 1, subheader: '8th Semester', menuItem1: 'Computer-A', menuItem2: 'Computer-B' },
        { id: 2, subheader: '7th Semester', menuItem1: 'Computer-A', menuItem2: 'Computer-B' },
        { id: 3, subheader: '6th Semester', menuItem1: 'Computer-A', menuItem2: 'Computer-B' },
        { id: 4, subheader: '5th Semester', menuItem1: 'Computer-A', menuItem2: 'Computer-B' },
        { id: 5, subheader: '4th Semester', menuItem1: 'Computer-A', menuItem2: 'Computer-B' },
        { id: 6, subheader: '3rd Semester', menuItem1: 'Computer-A', menuItem2: 'Computer-B' },
        { id: 7, subheader: '2nd Semester', menuItem1: 'Computer-A', menuItem2: 'Computer-B' },
        { id: 8, subheader: '1st Semester', menuItem1: 'Computer-A', menuItem2: 'Computer-B' },
    ]
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
                            {
                                sectionArray.map(items => {
                                    return (
                                        <div>
                                            <ListSubheader>{items.subheader}</ListSubheader>
                                            <MenuItem value={1} 
                                            onClick={() => handleSection(items.menuItem1, items.subheader)} 
                                            className={`${currentCategory === items.menuItem1 ? 'text-danger' : ''}`}>{items.menuItem1}</MenuItem>
                                            <MenuItem value={2} 
                                            onClick={() => handleSection(items.menuItem2, items.subheader)}
                                            className={`${currentCategory === items.menuItem2 ? 'text-danger' : ''}`}
                                            >{items.menuItem2}</MenuItem>
                                        </div>
                                    )
                                })

                            }
                        </Select>
                    </FormControl>
                </div>
            </div>
            <div className="row">
                <AttendenceTable currentCategory={currentCategory} />
            </div>
        </div>
    );
};

export default AttendencePage;
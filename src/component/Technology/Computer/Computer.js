import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { useState } from 'react';
import AttendenceTable from '../../AdminPanel/Page/AttendencePage/AttendenceTable';
import { useEffect } from 'react';
import sectionArray from '../../../fakeData/sectionArray/sectionArray'
const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
}));

const Computer = ({ registerStudent }) => {
    const classes = useStyles();
    const [currentCategory, setCurrentCategory] = useState({})
    useEffect(() => {
        const newCurrentCategory = { ...currentCategory }
        newCurrentCategory.section = 'Computer-A';
        newCurrentCategory.semester = '1st Semester';
        setCurrentCategory(newCurrentCategory)
    }, [])

    const handleSection = (section, semester) => {
        const newCurrentCategory = { ...currentCategory }
        newCurrentCategory.section = section;
        newCurrentCategory.semester = semester;
        setCurrentCategory(newCurrentCategory)
    }
    
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="grouped-select">Grouping</InputLabel>
                        <Select defaultValue="" id="grouped-select">
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            {
                                sectionArray.map(items => (
                                    [
                                        <ListSubheader>{items.subheader}</ListSubheader>,
                                        <MenuItem value={items.valueOne}
                                        onClick={() => handleSection(items.menuItem1, items.subheader)}
                                        >{items.menuItem1}</MenuItem>,
                                        <MenuItem value={items.valueTwo}
                                        onClick={() => handleSection(items.menuItem2, items.subheader)}
                                        >{items.menuItem2}</MenuItem>
                                ]
                                ))
                            }
                        </Select>
                    </FormControl>
                </div>
            </div>
            <div className="row">
                <AttendenceTable currentCategory={currentCategory} registerStudent={registerStudent} />
            </div>
        </div>
    )

};

export default Computer;
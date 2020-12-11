import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import './AddNewStudentForm.css'
const useStyles = makeStyles((theme) => ({
    formControl: {
        minWidth: '100%',
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));
const AddNewStudentForm = () => {
    const classes = useStyles();
    const [formField, setFormField] = useState({
        first: '',
        last: '',
        gender: '',
        dob: '',
        religion: '',
        email: '',
        department: '',
        section: '',
        admission: '',
        phone: '',
        description: '',
    })
    const [file, setFile] = useState(null)
    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile)
    }

    const handleChange = (event) => {
        let isFieldValid = true;
        if (event.target.value === 'first') {
            isFieldValid = event.target.value
        }
        if (event.target.value === 'last') {
            isFieldValid = event.target.value
        }
        if (event.target.value === 'gender') {
            isFieldValid = event.target.value
        }
        if (event.target.value === 'dob') {
            isFieldValid = event.target.value
        }
        if (event.target.value === 'religion') {
            isFieldValid = event.target.value
        }
        if(event.target.value === 'email'){
            isFieldValid = event.target.value;
        }
        if (event.target.value === 'department') {
            isFieldValid = event.target.value
        }
        if (event.target.value === 'section') {
            isFieldValid = event.target.value
        }
        if (event.target.value === 'admission') {
            isFieldValid = event.target.value
        }
        if (event.target.value === 'phone') {
            isFieldValid = event.target.value
        }
        if (event.target.value === 'description') {
            isFieldValid = event.target.value
        }
        if (isFieldValid) {
            const newForm = { ...formField };
            newForm[event.target.name] = event.target.value;
            setFormField(newForm)
        }
    };
    const handleSubmit = (e) => {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('first', formField.first)
        formData.append('last', formField.last)
        formData.append('gender', formField.gender)
        formData.append('dob', formField.dob)
        formData.append('religion', formField.religion)
        formData.append('email', formField.email)
        formData.append('department', formField.department)
        formData.append('section', formField.section)
        formData.append('admissionId', formField.admission)
        formData.append('phone', formField.phone)
        formData.append('description', formField.description)
        fetch('http://localhost:4000/studentRegister', {
            method: 'POST',
            body: formData,
        })
            .then(res => res.json())
            .then(data => {
                alert("Data Inserted!")
            })
        document.getElementById('form').reset();
        e.preventDefault()

    }
    function myFunction() {
        document.getElementById('form').reset();
    }

    return (
        <div className="container mt-5">
            <h2>Add New Student</h2>
            <form id="form" className={classes.root} noValidate autoComplete="off">
                <div className="row">

                    <div className="col-md-3 mt-4 pr-0">
                        <TextField className="w-100 h-100" type="text" onBlur={handleChange} name="first" required id="outlined-required" variant="outlined" label="First Name" />
                    </div>
                    <div className="col-md-3 mt-4 pr-0">
                        <TextField className="w-100 h-100" type="text" onBlur={handleChange} name="last" required id="outlined-required" variant="outlined" label="Last Name" />
                    </div>
                    <div className="col-md-3 mt-4 pr-0">
                        <FormControl id="outlined-basic" variant="outlined" className={classes.formControl}>
                            <InputLabel style={{ marginTop: '10px' }} id="demo-simple-select-label">Gender*</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                // value={gender}
                                required
                                onBlur={handleChange}
                                name="gender"
                                onChange={handleChange}
                            >
                                <MenuItem value="Male">Male</MenuItem>
                                <MenuItem value="Female">Female</MenuItem>
                            </Select>
                        </FormControl>

                    </div>
                    <div className="col-md-3 mt-4 pr-0">
                        <TextField className="w-100 h-100" onBlur={handleChange} name="dob" required id="outlined-required" variant="outlined" type="date" label="Date of Birth" />
                    </div>
                    <div className="col-md-3 mt-4 pr-0">
                        <TextField className="w-100 h-100" type="text" onBlur={handleChange} name="roll" required id="outlined-required" variant="outlined" label="Roll" />
                    </div>
                    <div className="col-md-3 mt-4 pr-0">
                        <FormControl id="outlined-basic" variant="outlined" className={classes.formControl}>
                            <InputLabel style={{ marginTop: '10px' }} id="demo-simple-select-label">Blood Group*</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                onBlur={handleChange}
                                name="blood"
                                required
                                onChange={handleChange}
                            >
                                <MenuItem value="A+">A+</MenuItem>
                                <MenuItem value="A-">A-</MenuItem>
                                <MenuItem value="B+">B+</MenuItem>
                                <MenuItem value="B-">B-</MenuItem>
                                <MenuItem value="O+">O+</MenuItem>
                                <MenuItem value="O-">O-</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div className="col-md-3 mt-4 pr-0">
                        <FormControl id="outlined-basic" variant="outlined" className={classes.formControl}>
                            <InputLabel style={{ marginTop: '10px' }} id="demo-simple-select-label">Religion*</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                // value={age}
                                onBlur={handleChange}
                                name="religion"
                                required
                                onChange={handleChange}
                            >
                                <MenuItem value="Islam">Islam</MenuItem>
                                <MenuItem value="Hindu">Hindu</MenuItem>
                                <MenuItem value="Buddist">Buddist</MenuItem>
                                <MenuItem value="Christian">Christian</MenuItem>
                                <MenuItem value="Others">Others</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div className="col-md-3 mt-4 pr-0">
                        <TextField className="w-100 h-100" type="email" onBlur={handleChange} name="email" required id="outlined-required" variant="outlined" label="Email" />
                    </div>
                    <div className="col-md-3 mt-4 pr-0">
                        <FormControl id="outlined-basic" variant="outlined" className={classes.formControl}>
                            <InputLabel style={{ marginTop: '10px' }} id="demo-simple-select-label">Department*</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                onBlur={handleChange}
                                name="department"
                                required
                                onChange={handleChange}
                            >
                                <MenuItem value="Computer">Computer</MenuItem>
                                <MenuItem value="Civil">Civil</MenuItem>
                                <MenuItem value="EEE">EEE</MenuItem>
                                <MenuItem value="Machanical">Machanical</MenuItem>
                                <MenuItem value="Textile">Textile</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div className="col-md-3 mt-4 pr-0">
                        <FormControl id="outlined-basic" variant="outlined" className={classes.formControl}>
                            <InputLabel style={{ marginTop: '10px' }} id="demo-simple-select-label">Section*</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                onBlur={handleChange}
                                required
                                name="section"
                                onChange={handleChange}
                            >
                                <MenuItem value="A">A</MenuItem>
                                <MenuItem value="B">B</MenuItem>
                                <MenuItem value="C">C</MenuItem>
                                <MenuItem value="D">D</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div className="col-md-3 mt-4 pr-0">
                        <TextField className="w-100 h-100" type="text" onBlur={handleChange} name="admission" required id="outlined-required" variant="outlined" label="Admission ID" />
                    </div>
                    <div className="col-md-3 mt-4 pr-0">
                        <TextField className="w-100 h-100" type="text" onBlur={handleChange} name="phone" required id="outlined-required" variant="outlined" label="Phone" />
                    </div>
                    <div className="col-md-6 mt-4">
                        <TextareaAutosize aria-label="minimum height" id="outlined-basic" variant="outlined" onBlur={handleChange} className="w-100" name="description" rowsMin={8} placeholder="Short BIO" />
                    </div>
                    <div className="col-md-3 mt-4 pr-0">
                        <div class="form-group">
                            <label >Upload Photo</label>
                            <input type="file" onBlur={handleFileChange} class="form-control-file" required id="outlined-required" />
                            
                        </div>
                    </div>
                </div>

                <div className="row mt-2">
                    <button type="submit" className="btn btn-light save text-white ml-3" onClick={handleSubmit} >Save</button>
                    <input type="reset" className="btn btn-light reset text-white ml-3" value="Reset" onClick={myFunction} />
                </div>
            </form>
            <p id="log"></p>

        </div>
    );
};

export default AddNewStudentForm;
import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import './AddNewTeacher.css'
const useStyles = makeStyles((theme) => ({
    formControl: {
        minWidth: '100%',
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));
const AddNewTeacher = () => {
    const classes = useStyles();
    const [file, setFile] = useState(null)
    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile)
    }
    const [formField, setFormField] = useState({
        first: '',
        last: '',
        gender: '',
        joiningDate: '',
        blood: '',
        idnumber: '',
        religion: '',
        email: '',
        department: '',
        qualification : '',
        address: '',
        phone: '',
        description: '',
    })
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
        if (event.target.value === 'joiningDate') {
            isFieldValid = event.target.value
        }
        if (event.target.value === 'idNumber') {
            isFieldValid = event.target.value
        }
        if (event.target.value === 'blood') {
            isFieldValid = event.target.value
        }
        if (event.target.value === 'religion') {
            isFieldValid = event.target.value
        }
        if (event.target.value === 'email') {
            isFieldValid = event.target.value
        }
        if (event.target.value === 'department') {
            isFieldValid = event.target.value
        }
        if (event.target.value === 'qualification') {
            isFieldValid = event.target.value
        }
        if (event.target.value === 'address') {
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
    function myFunction() {
        document.getElementById('teacherForm').reset();
    }
    const handleSubmit = (e) => {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('first', formField.first)
        formData.append('last', formField.last)
        formData.append('gender', formField.gender)
        formData.append('joiningDate', formField.joiningDate)
        formData.append('blood', formField.blood)
        formData.append('idnumber', formField.idnumber)
        formData.append('religion', formField.religion)
        formData.append('email', formField.email)
        formData.append('department', formField.department)
        formData.append('qualification', formField.qualification)
        formData.append('address', formField.address)
        formData.append('phone', formField.phone)
        formData.append('description', formField.description)
        fetch('https://secret-headland-48345.herokuapp.com/teacherRegister', {
            method: 'POST',
            body: formData,
        })
            .then(res => res.json())
            .then(data => {
                alert("Data Inserted!")
            })
        document.getElementById('teacherForm').reset();
        e.preventDefault()
    }
    
    return (
        <div className="container mt-5">
            <h2>Add New Teacher</h2>
            <form id="teacherForm" className={classes.root} noValidate autoComplete="off">
                <div className="row">
                    <div className="col-md-3 mt-4 pr-0">
                        <TextField className="w-100" onBlur={handleChange} name="first" id="outlined-basic" variant="outlined" label="First Name*" />
                    </div>
                    <div className="col-md-3 mt-4 pr-0">
                        <TextField className="w-100" onBlur={handleChange} name="last" id="outlined-basic" variant="outlined" label="Last Name*" />
                    </div>
                    <div className="col-md-3 mt-4 pr-0">
                        <FormControl id="outlined-basic" variant="outlined" className={classes.formControl}>
                            <InputLabel style={{ marginTop: '7px' }} id="demo-simple-select-label">Gender*</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                // value={gender}
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
                        <TextField className="w-100" onBlur={handleChange} name="joiningDate" id="outlined-basic" variant="outlined" label="Joining Date" type="text" />
                    </div>
                    <div className="col-md-3 mt-4 pr-0">
                        <TextField className="w-100" onBlur={handleChange} name="idnumber" id="outlined-basic" variant="outlined" label="ID No" />
                    </div>
                    <div className="col-md-3 mt-4 pr-0">
                        <FormControl id="outlined-basic" variant="outlined" className={classes.formControl}>
                            <InputLabel style={{ marginTop: '7px' }} id="demo-simple-select-label">Blood Group*</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                onBlur={handleChange}
                                name="blood"
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
                            <InputLabel style={{ marginTop: '7px' }} id="demo-simple-select-label">Religion*</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                // value={age}
                                onBlur={handleChange}
                                name="religion"
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
                        <TextField className="w-100" type="text" onBlur={handleChange} name="email" id="outlined-basic" variant="outlined" label="E-Mail*" />
                    </div>
                    <div className="col-md-3 mt-4 pr-0">
                        <FormControl id="outlined-basic" variant="outlined" className={classes.formControl}>
                            <InputLabel style={{ marginTop: '7px' }} id="demo-simple-select-label">Department*</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                onBlur={handleChange}
                                name="department"
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
                            <InputLabel style={{ marginTop: '7px' }} id="demo-simple-select-label">Last Qualification</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                onBlur={handleChange}
                                name="qualification"
                                onChange={handleChange}
                            >
                                <MenuItem value="MSC">MSC</MenuItem>
                                <MenuItem value="BSC">BSC</MenuItem>
                                <MenuItem value="Diploma">Diploma</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div className="col-md-3 mt-4 pr-0">
                        <TextField className="w-100" onBlur={handleChange} name="address" id="outlined-basic" variant="outlined" label="Address" />
                    </div>
                    <div className="col-md-3 mt-4 pr-0">
                        <TextField className="w-100" onBlur={handleChange} name="phone" id="outlined-basic" variant="outlined" label="Phone*" />
                    </div>
                    <div className="col-md-6 mt-4">
                        <TextareaAutosize aria-label="minimum height" id="outlined-basic" variant="outlined" onBlur={handleChange} className="w-100" name="description" rowsMin={8} placeholder="Short BIO" />
                    </div>
                    <div className="col-md-3 mt-4 pr-0">
                    <div className="form-group">
                            <label >Upload Photo</label>
                            <input type="file" onBlur={handleFileChange} className="form-control-file" required id="outlined-required" />
                            
                        </div>
                    </div>
                </div>

                <div className="row mt-2">
                    <button type="submit" className="btn btn-light save text-white ml-3" onClick={handleSubmit} >Save</button>
                    <input type="reset" className="btn btn-light reset text-white ml-3" value="Reset" onClick={myFunction}/>


                </div>
            </form>
        </div>
    );
};

export default AddNewTeacher;
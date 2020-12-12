import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { Link } from "react-router-dom";
import columns from '../../../../fakeData/columns';
import { useEffect } from 'react';
import { useState } from 'react';



const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: 765,
    },
});
const AllStudent = () => {
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    
    const studentData = JSON.parse(sessionStorage.getItem('studentInfo'))
    return (
        <Paper className={classes.root}>
            <TableContainer className={classes.container}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth, fontWeight: 'bold' }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {studentData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                            return (
                                <TableRow hover role="checkbox" tabIndex={-1} key={row._id}>
                                    {/* {columns.map((column) => {
                                        const value = row[column.id];
                                        console.log(row);

                                        return (
                                            <TableCell key={column.id} align={column.align}>
                                                {value}
                                            </TableCell>
                                        );
                                    })
                                    } */}
                                    <TableCell style={{ padding: '5px' }} >
                                        <p className="m-0 ml-2">{row.roll}</p>
                                    </TableCell>
                                    <TableCell className=" text-center" style={{ padding: '5px' }} >
                                        <img className="" style={{ height: '35px', borderRadius: '20px' }} src={`data:image/png;base64,${row.image.img}`} alt="" />
                                    </TableCell>
                                    <TableCell style={{ padding: '5px' }} >
                                        <Link to={`/info/${row.roll}`}><p className="m-0">{`${row.first} ${row.last}`}</p></Link>

                                    </TableCell>
                                    <TableCell style={{ padding: '5px' }} >
                                        <p className="m-0  text-center">{row.gender}</p>
                                    </TableCell>
                                    <TableCell style={{ padding: '5px' }} >
                                        <p className="m-0 text-center">{row.department}</p>
                                    </TableCell>
                                    <TableCell style={{ padding: '5px' }} >
                                        <p className="m-0 text-center">{row.section}</p>
                                    </TableCell>
                                    <TableCell style={{ padding: '5px' }} >
                                        <p className="m-0 text-center">{row.admissionId}</p>
                                    </TableCell>
                                    <TableCell style={{ padding: '5px' }} >
                                        <p className="m-0 text-center">{row.religion}</p>
                                    </TableCell>
                                    <TableCell style={{ padding: '5px' }} >
                                        <p className="m-0  text-center">{row.dob}</p>
                                    </TableCell>
                                    <TableCell style={{ padding: '5px' }} >
                                        <p className="m-0 text-center">{row.phone}</p>
                                    </TableCell>
                                    <TableCell style={{ padding: '5px' }} >
                                        <p className="m-0 text-center">{row.email}</p>
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={studentData.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </Paper>
    );
};

export default AllStudent;
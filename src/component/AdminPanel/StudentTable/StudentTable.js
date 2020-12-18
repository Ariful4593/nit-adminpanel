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
import columns from '../../../fakeData/columns';
import studentImage from '../../../image/img_avatar.jpg'
import DataTable from '../../../fakeData/DataTable/DataTable';


const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: 765,
    },
});
const StudentTable = ({registerStudent}) => {
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

    // const studentData = JSON.parse(sessionStorage.getItem('studentInfo'))
    // console.log(studentData ? true : false)
    // Color formatting...
    // function setColor(p) {
    //     var red = p < 50 ? 255 : Math.round(256 - (p - 50) * 5.12);
    //     var green = p > 50 ? 255 : Math.round((p) * 5.12);
    //     return "rgb(" + red + "," + green + ",0)";
    // }
    return (

        <Paper className={classes.root}>
            {
                registerStudent ? <>
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
                                {registerStudent.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={row._id}>
                                            <TableCell style={{ padding: '5px' }} >
                                                <p className="m-0 ml-2">{row.roll}</p>
                                            </TableCell>
                                            <TableCell className=" text-center" style={{ padding: '5px' }} >
                                                <img className="" style={{ height: '35px', borderRadius: '20px' }} src={studentImage} alt="" />
                                            </TableCell>
                                            <TableCell style={{ padding: '5px' }} >
                                                <Link to={`/info/${row.roll}`}><p className="m-0">{`${row.name}`}</p></Link>

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
                        count={registerStudent.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onChangePage={handleChangePage}
                        onChangeRowsPerPage={handleChangeRowsPerPage}
                    />
                </> : <DataTable />
            }


        </Paper>
    );
};

export default StudentTable;
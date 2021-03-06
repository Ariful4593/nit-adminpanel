import React from 'react';
import TeachersColumn from '../../../../fakeData/Teachers/TeachersColumn';
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
const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: 765,
    },
});
const AllTeachers = () => {
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
    const teachersData = JSON.parse(sessionStorage.getItem('teacherInfo'))
    return (
        <Paper className={classes.root}>
            <TableContainer className={classes.container}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {TeachersColumn.map((column) => (
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
                        {teachersData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                            return (
                                <TableRow hover role="checkbox" tabIndex={-1} key={row.idNumber}>
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
                                    <TableCell style={{padding: '5px'}} >
                                        <p className="m-0 ml-2">{row.idNumber}</p>
                                    </TableCell>
                                    <TableCell className="text-center" style={{padding: '5px'}} >
                                        <img className="" style={{width: '35px', height: '35px', borderRadius: '20px'}} src={`data:image/png;base64,${row.images.img}`} alt=""/>
                                    </TableCell>
                                    <TableCell style={{padding: '5px'}} >
                                        <Link to={`/teachers/${row.idNumber}`}><p className="m-0 ">{`${row.first} ${row.last}`}</p></Link>
                                        
                                    </TableCell>
                                    <TableCell style={{padding: '5px'}} >
                                        <p className="m-0 text-center">{row.gender}</p>
                                    </TableCell>
                                    <TableCell style={{padding: '5px'}} >
                                        <p className="m-0 text-center">{row.blood}</p>
                                    </TableCell>
                                    <TableCell style={{padding: '5px'}} >
                                        <p className="m-0 text-center">{row.department}</p>
                                    </TableCell>
                                    <TableCell style={{padding: '5px'}} >
                                        <p className="m-0 text-center">{row.qualification}</p>
                                    </TableCell>
                                    <TableCell style={{padding: '5px'}} >
                                    <p className="m-0 text-center">{row.joiningDate}</p>
                                    </TableCell>
                                    <TableCell style={{padding: '5px'}} >
                                        <p className="m-0 text-center">{row.religion}</p>
                                    </TableCell>
                                    <TableCell style={{padding: '5px'}} >
                                        <p className="m-0 text-center">{row.address}</p>
                                    </TableCell>
                                    <TableCell style={{padding: '5px'}} >
                                        <p className="m-0 text-center">{row.phone}</p>
                                    </TableCell>
                                    <TableCell style={{padding: '5px'}} >
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
                count={teachersData.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </Paper>
    );
};

export default AllTeachers;
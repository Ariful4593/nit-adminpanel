import React from 'react';
import TeachersColumn from '../../../../fakeData/Teachers/TeachersColumn';
import TeachersRow from '../../../../fakeData/Teachers/TeachersRow';
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
    return (
        <Paper className={classes.root}>
            <TableContainer className={classes.container}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {TeachersColumn.map((column) => (
                                <TableCell
                                    key={column.id}
                                    // align={column.align}
                                    style={{ minWidth: column.minWidth, fontWeight: 'bold' }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {TeachersRow.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                            return (
                                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
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
                                        <p className="m-0 ml-2">{row.roll}</p>
                                    </TableCell>
                                    <TableCell style={{padding: '5px'}} >
                                        <img className="" style={{height: '35px'}} src={row.photo} alt="" srcset=""/>
                                    </TableCell>
                                    <TableCell style={{padding: '5px'}} >
                                        <Link to={`/info/${row.roll}`}><p className="m-0">{row.name}</p></Link>
                                        
                                    </TableCell>
                                    <TableCell style={{padding: '5px'}} >
                                        <p className="m-0">{row.gender}</p>
                                    </TableCell>
                                    <TableCell style={{padding: '5px'}} >
                                        <p className="m-0">{row.department}</p>
                                    </TableCell>
                                    <TableCell style={{padding: '5px'}} >
                                        <p className="m-0">{row.section}</p>
                                    </TableCell>
                                    <TableCell style={{padding: '5px'}} >
                                        <p className="m-0">{row.father}</p>
                                    </TableCell>
                                    <TableCell style={{padding: '5px'}} >
                                    <p className="m-0">{row.address}</p>
                                    </TableCell>
                                    <TableCell style={{padding: '5px'}} >
                                        <p className="m-0">{row.dob}</p>
                                    </TableCell>
                                    <TableCell style={{padding: '5px'}} >
                                        <p className="m-0">{row.phone}</p>
                                    </TableCell>
                                    <TableCell style={{padding: '5px'}} >
                                        <p className="m-0">{row.email}</p>
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
                count={TeachersRow.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </Paper>
    );
};

export default AllTeachers;
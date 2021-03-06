import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import './AttendenceTable.css'
import cols from '../../../../fakeData/Attendence/cols';
import DataTable from '../../../../fakeData/DataTable/DataTable';


const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: 710,
    },
});
const AttendenceTable = ({currentCategory, registerStudent}) => {
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

    
    const filterRegisterStudent = registerStudent.filter(std => std.semester === currentCategory.semester && std.department+'-'+std.section === currentCategory.section)
    
    return (

        <Paper className={classes.root}>
            {
                filterRegisterStudent.length > 0 ? <>
                <TableContainer className={classes.container}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {cols.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                </Table>
                {filterRegisterStudent.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                            return (
                                <TableRow hover role="checkbox" tabIndex={-1} key={row._id}>
                                    <TableCell style={{ padding: '5px', minWidth: '155px' }} >
                                    {row.name}
                                    </TableCell>
                                    <TableRow>
                                        {
                                            row.data.map(data => {
                                                return (
                                                    <TableCell className="col-2">{data.present} </TableCell>
                                                )
                                            })
                                        }
                                    </TableRow>
                                </TableRow>
                            );
                        })}
            </TableContainer>
            
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={filterRegisterStudent.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            /></> : <DataTable />
            }
            
        </Paper>
    );
};

export default AttendenceTable;
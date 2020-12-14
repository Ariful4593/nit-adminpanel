import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

const columns = [
    { id: 'name', label: 'Name', minWidth: 140 },
    { id: 'day1', label: '1', minWidth: 25, align: 'center', },
    { id: 'day2', label: '2', minWidth: 25, align: 'center', format: (value) => value.toLocaleString('en-US'), },
    { id: 'day3', label: '3', minWidth: 25, align: 'center', format: (value) => value.toLocaleString('en-US'), },
    { id: 'day4', label: '4', minWidth: 25, align: 'center', format: (value) => value.toLocaleString('en-US'), },
    { id: 'day5', label: '5', minWidth: 25, align: 'center', },
    { id: 'day6', label: '6', minWidth: 25, align: 'center', format: (value) => value.toLocaleString('en-US'), },
    { id: 'day7', label: '7', minWidth: 25, align: 'center', format: (value) => value.toLocaleString('en-US'), },
    { id: 'day8', label: '8', minWidth: 25, align: 'center', format: (value) => value.toLocaleString('en-US'), },
    { id: 'day9', label: '9', minWidth: 25, align: 'center', },
    { id: 'day10', label: '10', minWidth: 25, align: 'center', format: (value) => value.toLocaleString('en-US'), },
    { id: 'day11', label: '11', minWidth: 25, align: 'center', format: (value) => value.toLocaleString('en-US'), },
    { id: 'day12', label: '12', minWidth: 25, align: 'center', format: (value) => value.toLocaleString('en-US'), },
    { id: 'day13', label: '13', minWidth: 25, align: 'center', },
    { id: 'day14', label: '14', minWidth: 25, align: 'center', format: (value) => value.toLocaleString('en-US'), },
    { id: 'day15', label: '15', minWidth: 25, align: 'center', format: (value) => value.toLocaleString('en-US'), },
    { id: 'day16', label: '16', minWidth: 25, align: 'center', format: (value) => value.toLocaleString('en-US'), },
    { id: 'day17', label: '17', minWidth: 25, align: 'center', },
    { id: 'day18', label: '18', minWidth: 25, align: 'center', format: (value) => value.toLocaleString('en-US'), },
    { id: 'day19', label: '19', minWidth: 25, align: 'center', format: (value) => value.toLocaleString('en-US'), },
    { id: 'day20', label: '20', minWidth: 25, align: 'center', format: (value) => value.toLocaleString('en-US'), },
    { id: 'day21', label: '21', minWidth: 25, align: 'center', },
    { id: 'day22', label: '22', minWidth: 25, align: 'center', format: (value) => value.toLocaleString('en-US'), },
    { id: 'day23', label: '23', minWidth: 25, align: 'center', format: (value) => value.toLocaleString('en-US'), },
    { id: 'day24', label: '24', minWidth: 25, align: 'center', format: (value) => value.toLocaleString('en-US'), },
    { id: 'day25', label: '25', minWidth: 25, align: 'center', format: (value) => value.toLocaleString('en-US'), },
    { id: 'day26', label: '26', minWidth: 25, align: 'center', format: (value) => value.toLocaleString('en-US'), },
    { id: 'day27', label: '27', minWidth: 25, align: 'center', format: (value) => value.toLocaleString('en-US'), },
    { id: 'day28', label: '28', minWidth: 25, align: 'center', },
    { id: 'day29', label: '29', minWidth: 25, align: 'center', format: (value) => value.toLocaleString('en-US'), },
    { id: 'day30', label: '30', minWidth: 25, align: 'center', format: (value) => value.toLocaleString('en-US'), },
    { id: 'day31', label: '31', minWidth: 25, align: 'center', format: (value) => value.toLocaleString('en-US'), },
];
function createData(name, day1, day2, day3, day4, day5, day6, day7, day8, day9, day10, day11, day12, day13, day14, day15, day16, day17, day18, day19, day20, day21, day22, day23, day24, day25, day26, day27, day28, day29, day30, day31,) {
    return { name, day1, day2, day3, day4, day5, day6, day7, day8, day9, day10, day11, day12, day13, day14, day15, day16, day17, day18, day19, day20, day21, day22, day23, day24, day25, day26, day27, day28, day29, day30, day31 };
}
const rows = [
    createData('Ariful Islam', 'A', 'A', 'P', 'P', 'A', 'A', 'P', 'P', 'A', 'A', 'P', 'P', 'A', 'A', 'P', 'P', 'A', 'A', 'P', 'P', 'A', 'A', 'P', 'P', 'A', 'P', 'P', 'A', 'A', 'P', 'P'),
    createData('Shoriful Islam', 'A', 'P', 'A', 'P', 'A', 'A', 'P', 'P', 'A', 'A', 'P', 'P', 'A', 'A', 'P', 'P', 'A', 'A', 'P', 'P', 'A', 'A', 'P', 'P', 'A', 'P', 'P', 'A', 'A', 'P', 'P'),
    createData('Karim Khan', 'P', 'P', 'P', 'P', 'A', 'A', 'P', 'P', 'A', 'A', 'P', 'P', 'A', 'A', 'P', 'P', 'A', 'A', 'P', 'P', 'A', 'A', 'P', 'P', 'A', 'P', 'P', 'A', 'A', 'P', 'P'),
    createData('Shoyeb Mahmud Sunny', 'A', 'A', 'P', 'P', 'A', 'A', 'P', 'P', 'A', 'A', 'P', 'P', 'A', 'A', 'P', 'P', 'A', 'A', 'P', 'P', 'A', 'A', 'P', 'P', 'A', 'P', 'P', 'A', 'A', 'P', 'P'),
    createData('Momin Khan', 'A', 'P', 'P', 'P', 'A', 'A', 'P', 'P', 'A', 'A', 'P', 'P', 'A', 'A', 'P', 'P', 'A', 'A', 'P', 'P', 'A', 'A', 'P', 'P', 'A', 'P', 'P', 'A', 'A', 'P', 'P'),
    createData('Saidul Islam', 'P', 'P', 'A', 'P', 'A', 'A', 'P', 'P', 'A', 'A', 'P', 'P', 'A', 'A', 'P', 'P', 'A', 'A', 'P', 'P', 'A', 'A', 'P', 'P', 'A', 'P', 'P', 'A', 'A', 'P', 'P'),
    createData('Faraj Khan', 'P', 'A', 'P', 'P', 'A', 'A', 'P', 'P', 'A', 'A', 'P', 'P', 'A', 'A', 'P', 'P', 'A', 'A', 'P', 'P', 'A', 'A', 'P', 'P', 'A', 'P', 'P', 'A', 'A', 'P', 'P'),
    createData('Akram Khan', 'P', 'A', 'A', 'P', 'A', 'A', 'P', 'P', 'A', 'A', 'P', 'P', 'A', 'A', 'P', 'P', 'A', 'A', 'P', 'P', 'A', 'A', 'P', 'P', 'A', 'P', 'P', 'A', 'A', 'P', 'P'),
    createData('Selim Khan', 'P', 'P', 'P', 'P', 'A', 'A', 'P', 'P', 'A', 'A', 'P', 'P', 'A', 'A', 'P', 'P', 'A', 'A', 'P', 'P', 'A', 'A', 'P', 'P', 'A', 'P', 'P', 'A', 'A', 'P', 'P'),
    createData('Jahed Khan', 'P', 'A', 'P', 'P', 'A', 'A', 'P', 'P', 'A', 'A', 'P', 'P', 'A', 'A', 'P', 'P', 'A', 'A', 'P', 'P', 'A', 'A', 'P', 'P', 'A', 'P', 'P', 'A', 'A', 'P', 'P'),
    createData('Abdul Khalek', 'P', 'P', 'P', 'P', 'A', 'A', 'P', 'P', 'A', 'A', 'P', 'P', 'A', 'A', 'P', 'P', 'A', 'A', 'P', 'P', 'A', 'A', 'P', 'P', 'A', 'P', 'P', 'A', 'A', 'P', 'P'),
    createData('Jinnat Ara', 'A', 'A', 'P', 'P', 'A', 'A', 'P', 'P', 'A', 'A', 'P', 'P', 'A', 'A', 'P', 'P', 'A', 'A', 'P', 'P', 'A', 'A', 'P', 'P', 'A', 'P', 'P', 'A', 'A', 'P', 'P'),
    createData('Shatu Dash', 'A', 'A', 'A', 'P', 'A', 'A', 'P', 'P', 'A', 'A', 'P', 'P', 'A', 'A', 'P', 'P', 'A', 'A', 'P', 'P', 'A', 'A', 'P', 'P', 'A', 'P', 'P', 'A', 'A', 'P', 'P'),
    createData('Any Dey', 'A', 'A', 'P', 'P', 'A', 'A', 'P', 'P', 'A', 'A', 'P', 'P', 'A', 'A', 'P', 'P', 'A', 'A', 'P', 'P', 'A', 'A', 'P', 'P', 'A', 'P', 'P', 'A', 'A', 'P', 'P'),
    createData('Any Dash', 'A', 'P', 'A', 'P', 'A', 'A', 'P', 'P', 'A', 'A', 'P', 'P', 'A', 'A', 'P', 'P', 'A', 'A', 'P', 'P', 'A', 'A', 'P', 'P', 'A', 'P', 'P', 'A', 'A', 'P', 'P'),
]
const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: 710,
    },
});
const AttendenceTable = () => {
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [att, setAtt] = useState([])
    useEffect(() => {
        fetch('http://localhost:4000/getUser')
            .then(res => res.json())
            .then(data => setAtt(data))
    }, [])
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
                            {columns.map((column) => (
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
                {att.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                            return (
                                <TableRow hover role="checkbox" tabIndex={-1} key={row._id}>
                                    <TableCell style={{ padding: '5px', minWidth: '140px' }} >
                                        <p className="m-0 ml-2">{row.name}</p>
                                    </TableCell>
                                    <tr>
                                        {
                                            row.present.map(data => {
                                                return (
                                                    <td className="col-2">{data.present} </td>
                                                )
                                            })
                                        }
                                    </tr>
                                </TableRow>
                            );
                        })}
            </TableContainer>
            
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </Paper>
    );
};

export default AttendenceTable;
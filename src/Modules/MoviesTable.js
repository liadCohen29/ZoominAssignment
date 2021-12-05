import {makeStyles} from "@material-ui/core";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {Paper} from "@material-ui/core";
import { useState} from "react";
const useStyles = makeStyles({
    root: {width:'100%'},
    tableContainer:{overflow:'hidden', opacity:1, height:'588px',backgroundColor:'white', width:'90%',marginLeft:'3%'}// a style rule
});


const MoviesTable =(props) => {
    const classes = useStyles();
    const {func, films} = props;
    const [currentIndexClick,setCurrentIndexClick] = useState(-1);
    const rowsPerPage = 10;
    const emptyRows = rowsPerPage - (films.length%rowsPerPage);

    const handleRowClicked =(index,row) =>{
        if(currentIndexClick===index) {
            setCurrentIndexClick(-1)
            func(false,null);

        }
        else {
            setCurrentIndexClick(index);
            func(true,row);

        }
    };

    return(
    <div className={classes.root}>
        <TableContainer component={Paper} className={classes.tableContainer}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align={'center'} >Id</TableCell>
                        <TableCell >Film Name</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {films.map((film) => (
                        <TableRow key={film.episode_id} onClick={()=>handleRowClicked(film.episode_id,film)}>
                            <TableCell align={'center'}>{film.episode_id}</TableCell>
                            <TableCell >
                                {film.title}
                            </TableCell>
                        </TableRow>
                    ))}
                    {emptyRows > 0 && (
                        <TableRow style={{ height: 53 * emptyRows }}>
                            <TableCell colSpan={6} />
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    </div>
)
}

export default MoviesTable;
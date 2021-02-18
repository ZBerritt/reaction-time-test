import { TableContainer, Table, TableBody, TableHead, TableRow, TableCell } from "@material-ui/core";

export default function Results(props) {
    return (
        <TableContainer>
            <Table size="medium" aria-label="Trial table">
                <TableHead>
                    <TableRow>
                        <TableCell>Trial</TableCell>
                        <TableCell align="right">Time</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.stats.map((time, index) => (
                        <TableRow key={"trial" + index}>
                            <TableCell component="th" scope="row">
                                {index + 1}
                            </TableCell>
                            <TableCell align="right">
                                {time + "ms"}
                            </TableCell>
                        </TableRow>
                    ))}
                    <Average stats={props.stats} />
                </TableBody>
            </Table>
        </TableContainer>
    )
}

function Average(props) {
    var stats = props.stats
    if (stats.length < 1) {
        return null;
    } else {
        var total = 0;
     stats.forEach(e => {
         if (typeof e == "number") {
            total += e;
         }
     });
     var average = total/stats.length;
     return (
        <TableRow>
            <TableCell component="th" scope="row">Average</TableCell>
            <TableCell align="right">{average + "ms"}</TableCell>
        </TableRow>
     )
    }
}
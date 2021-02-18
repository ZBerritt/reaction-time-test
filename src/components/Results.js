import { TextField, Grid, Typography } from "@material-ui/core";

export default function Results(props) {
    return (
        <Grid container direction="column" justify="center" spacing={3}>
            <Grid item xs>
            <Typography variant="h4">
                Trials
                </Typography>
            </Grid>
            <Grid item xs>
                <TextField helperText="Trial 1" value={props.stats[0] ? props.stats[0] + "ms" : ""} />
            </Grid>
            <Grid item xs>
                <TextField helperText="Trial 2" value={props.stats[1] ? props.stats[1] + "ms" : ""} />
            </Grid>
            <Grid item xs>
                <TextField helperText="Trial 3" value={props.stats[2] ? props.stats[2] + "ms" : ""} />
            </Grid>
            <Grid item xs>
                <TextField helperText="Trial 4" value={props.stats[3] ? props.stats[3] + "ms" : ""} />
            </Grid>
            <Grid item xs>
                <TextField helperText="Trial 5" value={props.stats[4] ? props.stats[4] + "ms" : ""} />
            </Grid>
            <Grid item xs>
                <TextField helperText="Average" value={props.stats[0] ? average(props.stats) + "ms" : ""} />
            </Grid>
        </Grid>
    )
}

function average(arr) {
     var total = 0;
     arr.forEach(e => {
         if (typeof e == "number") {
            total += e;
         }
     });
     return total/arr.length;
}
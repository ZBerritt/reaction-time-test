import { Link, Typography } from "@material-ui/core";
import { GitHub } from "@material-ui/icons";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    footer: {
        position: "fixed",
        left: 0,
        bottom: 0,
        width: "100%",
        backgroundColor: theme.palette.grey[800],
        color: "white",
        textAlign: "center",
        padding: ".5%"
    }
}));

export default function Footer() {
    const classes = useStyles();
    return (
      <div className={classes.footer}>
              <Typography>
                  &copy; 2021 Nitrogen2Oxygen
                  <br />
                  <Link color="inherit" href="https://github.com/Nitrogen2Oxygen/reaction-time-test" target="_blank" rel="noreferrer">
                    <GitHub fontSize="large" />
                  </Link>
              </Typography>
      </div>
    )
}
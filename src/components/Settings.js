import { useState } from "react";
import { makeStyles, Box, Button, Dialog, DialogTitle, DialogContent, DialogContentText, Select, MenuItem, FormControl, InputLabel } from "@material-ui/core";

export default function Settings(props) {
    const { settings, setSettings } = props;
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
      };

      const handleClose = () => {
        setOpen(false);
      };

      return (
    <Box>
        <Button id="reset-btn" variant="contained" color="secondary" size="medium" onClick={handleOpen}>
                Settings
        </Button>
        <SettingsDialog settings={settings} open={open} onClose={handleClose} setSettings={setSettings} />
    </Box>
      )
}

const useStyles = makeStyles((theme) => ({
    form: {
      display: 'flex',
      flexDirection: 'column',
      margin: 'auto',
      width: 'fit-content',
    },
    formControl: {
      marginTop: theme.spacing(2),
      minWidth: 120,
    },
    formControlLabel: {
      marginTop: theme.spacing(1),
    },
  }));

function SettingsDialog(props) {
    const classes = useStyles();
    const { settings, setSettings, onClose, open } = props;

      return (
          <Dialog settings={settings} setSettings={setSettings} onClose={onClose} aria-labelledby="settings-dialog" open={open}>
              <DialogTitle id="settings-dialog">Reaction Time Test Settings</DialogTitle>
              <DialogContent>
                <DialogContentText>
                    You can set various settings from here. At the moment they do not persist between sessions.
                </DialogContentText>
                  <form noValidate className={classes.form}>
                      <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="trials">Trial Amount:</InputLabel>
                        <Select autoFocus value={settings.trials} onChange={(e) => {
                            let newSettings = settings;
                            settings.trials = parseInt(e.target.value);
                            setSettings(newSettings);
                        }} inputProps={{
                            name: 'trials',
                            id: 'trials',
                          }}>
                            <MenuItem value="1">1</MenuItem>
                            <MenuItem value="2">2</MenuItem>
                            <MenuItem value="3">3</MenuItem>
                            <MenuItem value="4">4</MenuItem>
                            <MenuItem value="5">5</MenuItem>
                        </Select>
                      </FormControl>
                  </form>
              </DialogContent>
          </Dialog>
      )
  }
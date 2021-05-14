import Results from "./Results";
import "./ReactionTest.css";
import { useState, useEffect } from "react";
import { Box, Button, Divider, Grid, Typography, List, ListItem } from "@material-ui/core";

export default function ReactionTest() {
  const [results, setResults] = useState([]);
  const [testing, setTesting] = useState(false);
  const [triggered, setTriggered] = useState(null);
  const [testTimeout, setTestTimeout] = useState(null);
  const [actionButton, setActionButton] = useState("main");

  useEffect(() => {
    if (testing) {
      // Begin test
      document.getElementById("color-box").style["background-color"] = "red";
      setActionButton("click-here");
      var getTimeout = Math.floor(Math.random() * 7) + 3;
      setTestTimeout(
        setTimeout(function () {
          document.getElementById("color-box").style["background-color"] =
            "green";
          setTriggered(new Date().getTime());
          setTestTimeout(null);
        }, getTimeout * 1000)
      );
    } else {
      if (!triggered) return;
      // End test
      var diff = new Date().getTime() - triggered;
      setTriggered(null);
      document.getElementById("color-box").style["background-color"] = "yellow";
      setResults([...results, diff]);
      if (results.length >= 4) {
        setActionButton("finished");
      }
    }
  }, [testing]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Grid container direction="row" justify="center">
      <Grid item xs>
        <Typography variant="h4">Reaction Test</Typography>
          <List>
            <ListItem>1. Click the blue "start" button</ListItem>
            <ListItem>2. Wait until the box turns green</ListItem>
            <ListItem>3. Click the "Click Here" button as fast as possible</ListItem>
            <ListItem>4. Do this 5 times to complete the test</ListItem>
          </List>
        <Divider variant="middle" />
        <br />
        <Grid container direction="row" justify="center">
          <Grid item xs>
            <ActionButton button={actionButton} />
            <br />
            <br />
            <Button id="reset-btn" variant="contained" color="secondary" size="medium" onClick={function () {
                // Reset game
                document.getElementById("color-box").style["background-color"] = "yellow";
                setActionButton("main");
                setTesting(false);
                setTriggered(null);
                setTestTimeout(clearTimeout(testTimeout));
                setResults([]);
              }}>
                Reset
              </Button>
          </Grid>
          <Grid item xs>
            <Box
              id="color-box"
              style={{ backgroundColor: "yellow" }}
              width="250px"
              height="250px"
            />
          </Grid>
        </Grid>
      </Grid>
      <Divider orientation="vertical" variant="middle" flexItem />
      <Grid item xs>
        <Typography variant="h4">Results</Typography>
        <Results stats={results} />
      </Grid>
    </Grid>
  );

  function ActionButton(props) {
    switch (props.button) {
      case "early":
        return (
          <Button id="too-early-btn" variant="contained" color="secondary" size="large" disabled>
            Too Early!
          </Button>
        );
      case "finished":
        return (
          <Button id="finished-btn" variant="contained" color="secondary" size="large" disabled>
            Finished!
          </Button>
        );
        case "click-here":
          return (
            <Button id="click-here-btn" variant="contained" color="primary" size="large"
              onClick={function () {
                if (results.length >= 5) return;
                if (testTimeout) {
                  // Too early
                  setTestTimeout(clearTimeout(testTimeout));
                  document.getElementById("color-box").style["background-color"] = "yellow";
                  setActionButton("early");
                  setTimeout(setActionButton, 2000, "main");
                } else {
                  // Hit
                  setActionButton("main");
                  document.getElementById("color-box").style["background-color"] = "yellow";
                }
                setTesting(false);
              }}
            >
              Click Here
            </Button>
          );
      case "main":
      default:
        return (
          <Button id="main-btn" variant="contained" color="primary" size="large"
            onClick={function () {
              if (results.length >= 5) return;
              setTesting(true);
            }}
          >
            Start
          </Button>
        );
    }
  }
}

import Results from "./Results";
import "./ReactionTest.css";
import { useState, useEffect } from "react";
import { Box, Button, Divider, Grid, Typography } from "@material-ui/core";

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
      document.getElementById("main-btn").innerText = "Click Here";
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

  useEffect(() => {
    document.getElementById("main-btn").style.display = "none";
    document.getElementById("too-early-btn").style.display = "none";
    document.getElementById("finished-btn").style.display = "none";
    switch (actionButton) {
      case "main":
        document.getElementById("main-btn").style.display = "inline-flex";
        break;
      case "early":
        document.getElementById("too-early-btn").style.display = "inline-flex";
        break;
      case "finished":
        document.getElementById("finished-btn").style.display = "inline-flex";
        break;
      default:
        document.getElementById("main-btn").style.display = "inline-flex";
        break;
    }
  }, [actionButton]);

  return (
    <Grid container direction="row" justify="center">
      <Grid item xs>
        <Typography variant="h4">Reaction Test</Typography>
        <Typography variant="body1">
          <ol>
            <li>Click the start button</li>
            <li>Wait until the box turns green</li>
            <li>Click the "Click Here" button as fast as possible</li>
            <li>Do this 5 times to complete the test</li>
          </ol>
        </Typography>
        <Divider variant="middle" />
        <br />
        <Grid container direction="row" justify="center">
          <Grid item xs>
            <Button
              id="main-btn"
              variant="contained"
              color="primary"
              size="large"
              onClick={function () {
                if (results.length >= 5) return;
                if (!testing) {
                  setTesting(true);
                } else {
                  if (testTimeout) {
                    // Too early
                    setTestTimeout(clearTimeout(testTimeout));
                    document.getElementById("color-box").style[
                      "background-color"
                    ] = "yellow";
                    setActionButton("early");
                    document.getElementById("main-btn").innerText = "Start";
                    setTimeout(setActionButton, 2000, "main");
                  } else {
                    // Hit
                    document.getElementById("main-btn").innerText = "Start";
                    document.getElementById("color-box").style[
                      "background-color"
                    ] = "yellow";
                  }
                  setTesting(false);
                }
              }}
            >
              Start
            </Button>
            <Button
              style={{ display: "none" }}
              id="too-early-btn"
              variant="contained"
              color="secondary"
              size="large"
              disabled
            >
              Too Early!
            </Button>
            <Button
              style={{ display: "none" }}
              id="finished-btn"
              variant="contained"
              color="secondary"
              size="large"
              disabled
            >
              Finished!
            </Button>
            <br />
            <br />
            <Button
              id="reset-btn"
              variant="contained"
              color="secondary"
              size="medium"
              onClick={function () {
                // Reset game
                document.getElementById("color-box").style["background-color"] =
                  "yellow";
                setActionButton("main");
                document.getElementById("main-btn").innerText = "Start";
                setTesting(null);
                setTriggered(null);
                setTestTimeout(
                  testTimeout == null ? null : clearTimeout(testTimeout)
                );
                setResults([]);
              }}
            >
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
}

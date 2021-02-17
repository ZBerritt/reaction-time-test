import Results from "./Results";
import "./Test.css"
import { useState, useEffect } from "react";
import { Box, Button, Divider, Grid } from "@material-ui/core";

export default function Test() {
    const [results, setResults] = useState([]);
    const [testing, setTesting] = useState(false);
    const [triggered, setTriggered] = useState(null);
    const [testTimeout, setTestTimeout] = useState(null);

    
    useEffect(() => {
        console.log(testing)
        if (testing) {
            // Begin test
            document.getElementById("color-box").style["background-color"] = "red";
            document.getElementById("main-btn").innerText = "Click here";
            var getTimeout = Math.floor(Math.random() * 7) + 3
            setTestTimeout(
                setTimeout(function() {
                    document.getElementById("color-box").style["background-color"] = "green";
                    setTriggered(new Date().getTime())
                }, getTimeout * 1000)
            )
        } else {
            if (!triggered) return;
            // End test
            var diff = (new Date().getTime()) - triggered;
            setTriggered(null);
            document.getElementById("color-box").style["background-color"] = "yellow";
            setResults([...results, diff])
            if (results.length >= 4) {
                document.getElementById("main-btn").style.display = "none"
                document.getElementById("finished-btn").style.display = "inline-flex"
            }
        }
    }, [testing]); // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        console.log(results)
    }, [results])

    useEffect(() => {
        console.log(triggered)
    }, [triggered])

    useEffect(() => {
        console.log(testTimeout)
    }, [testTimeout])

    return (
        <Grid container direction="row" justify="center">
            <Grid item xs>
                <h2>Reaction Test</h2>
                <ol>
                        <li>Click the start button</li>
                        <li>Wait until the box turns green</li>
                        <li>Click the "Click Here" button as fast as possible</li>
                        <li>Do this 5 times to complete the test</li>
                    </ol>
                <Divider />
                <br />
                <Grid container direction="row" justify="center">
                    <Grid item xs>
                    <Button id="main-btn" variant="contained" color="primary" size="large" onClick={function() { 
                        if (results.length >= 5) return;
                        if (!testing) {
                            setTesting(true); 
                        } else {
                            if (testTimeout !== null) {
                                setTestTimeout(clearTimeout(testTimeout));
                                document.getElementById("main-btn").innerText = "Start";
                                document.getElementById("color-box").style["background-color"] = "yellow";
                            }
                            setTesting(false);
                        }
                        }}>Start</Button>
                        <Button style={{display: "none"}} id="finished-btn" variant="contained" color="secondary" size="large" disabled>
                            Finished!
                        </Button>
                        <br /><br />
                        <Button id="reset-btn" variant="contained" color="secondary" size="medium" onClick={function() {
                            document.getElementById("main-btn").innerText = "Start";
                            document.getElementById("color-box").style["background-color"] = "yellow";
                            setTesting(null);
                            setTriggered(null)
                            setTestTimeout(testTimeout == null ? null : clearTimeout(testTimeout))
                            setResults([]);
                        }}>Reset</Button>
                    </Grid>
                    <Grid item xs>
                    <Box id="color-box" style={{backgroundColor: "yellow"}} width="250px" height="250px" />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs>
               <Results stats={results} /> 
            </Grid>
        </Grid>
        
    )
}
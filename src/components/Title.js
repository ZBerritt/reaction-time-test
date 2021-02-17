import { Box } from "@material-ui/core";

export default function Title() {
    return (
        <Box>
            <Box textAlign="center">
                <h1>Reaction Time Test</h1>
                <span>By Nitrogen2Oxygen</span>
            </Box>
            <Box textAlign="center">
                <h2 style={{textAlign: "center"}}>About</h2>
                    <p>
                    This is a reaction time test (built with React {">"}:3).
                    You will click a button and wait for it to change colors, then click it again.
                    This test is not 100% accurate and is limited by computer and browser performance, as well as basic input lag.
                    <br></br><br></br>
                    <b>NOTE:</b> Certain privacy related browser settings on Firefox will make this test less accurate. 
                    For the most accurate times, please disable the "privacy.reduceTimerPrecision" or change the value of "privacy.resistFingerprinting" 
                </p>
            </Box>
        </Box>
    )
}
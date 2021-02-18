import { Box, Typography } from "@material-ui/core";

export default function Title() {
    return (
        <Box textAlign="center">
                <Typography variant="h3" color="inherit">
                    Reaction Time Test
                </Typography>
                <Typography color="inherit">
                    This is a reaction time test (built with React {">"}:3).
                    You will click a button and wait for it to change colors, then click it again.
                    This test is not 100% accurate and is limited by computer and browser performance, as well as basic input lag.
                    <br></br><br></br>
                    <b>NOTE:</b> Certain privacy related browser settings on Firefox will make this test less accurate. 
                    For the most accurate times, please disable the "privacy.reduceTimerPrecision" or change the value of "privacy.resistFingerprinting" 
                </Typography>
        </Box>
    )
}
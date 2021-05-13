import { Divider, Container, Typography, Box } from '@material-ui/core';
import ReactionTest from "./ReactionTest";

export default function App() {
  return (
      <Container>
        <Box textAlign="center">
                <Typography variant="h3" color="inherit">
                    Reaction Time Test
                </Typography>
                <Typography variant="subtitle1" color="inherit">
                    This is a reaction time test (built with React haha).
                    You will click a button and wait for it to change colors, then click it again as soon as possible.
                    The test is measured in milliseconds (1ms = 1/1000 seconds).
                    You will complete 5 trials of this, each being recorded on the right, with the average performance being on the bottom.
                    This test is not 100% accurate and is limited by computer and browser performance, as well as basic input lag.
                </Typography>
                <Typography variant="subtitle2" color="inherit">
                    IMPORTANT: Certain privacy related browser settings on Firefox will make this test less accurate. 
                    For the most accurate times, please disable the "privacy.reduceTimerPrecision" or change the value of "privacy.resistFingerprinting." 
                </Typography>
        </Box>
        <br />
        <Divider />
        <br />
        <ReactionTest />
      </Container>
  );
}

import { Divider, Container } from '@material-ui/core';
import './App.css';
import Title from './Title';
import ReactionTest from "./ReactionTest";
import Footer from "./Footer"

export default function App() {
  return (
      <Container>
        <Title />
        <br />
        <Divider />
        <br />
        <ReactionTest />
        <Footer />
      </Container>
  );
}

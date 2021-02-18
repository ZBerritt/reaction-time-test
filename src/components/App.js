import { Divider, Container } from '@material-ui/core';
import './App.css';
import Title from './Title';
import Test from "./Test";
import Footer from "./Footer"

export default function App() {
  return (
      <Container>
        <Title />
        <br />
        <Divider />
        <br />
        <Test />
        <Footer />
      </Container>
  );
}

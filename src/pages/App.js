/* eslint-disable no-undef */
import Alert from 'react-bootstrap/Alert';
import logo from "../resources/logo darwinex.svg";
import HelloMessage from "../components/HelloMessage.js";
import Spinner from 'react-bootstrap/Spinner'
import Carousel from 'react-bootstrap/Carousel'
import "./App.css";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://darwinex.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Darwinex Homep
        </a>
      </header>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=First slide&bg=373940"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Second slide&bg=282c34"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Third slide&bg=20232a"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Spinner animation="border" />
      <HelloMessage name="Taylor" />

      <Alert dismissible variant="danger">
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>
          asdfas dfasd fasdf asdf 
        </p>
      </Alert>
    </div>
  );
}

export default App;

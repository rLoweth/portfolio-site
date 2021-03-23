import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import { Navbar, NavbarBrand, Nav } from 'react-bootstrap';

import Footer from "./components/Footer";


class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      title: 'Ryan Loweth',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Contact', path: '/contact' }
      ],
      home: {
        title: 'Creativity through Programming',
        subTitle: 'Projects of self expression',
        text: 'These are projects that I believe best display my technical knowledge and creativity'
      },
      about: {
        title: 'My background and where I would like to go'
      },
      contact: {
        title: 'Get in touch!'
      }
    }
  }


  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          
          <Navbar className="border-bottom">
            <Navbar.Brand>Ryan Loweth</Navbar.Brand>
            
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle" >
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Footer />


        </Container>
      </Router>
    );
  }
}

export default App;

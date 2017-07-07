import React, {Component} from 'react';
import logo from './logo.png';
import {Navbar, FormGroup, FormControl, Button} from 'react-bootstrap';
import './TopBar.css'

class TopBar extends Component {

  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/home">
              <img alt="Brand" src={logo}/>
            </a>
          </Navbar.Brand>
          <Navbar.Toggle/>
        </Navbar.Header>
        <Navbar.Collapse>
          <Navbar.Form pullLeft>
            <FormGroup>
              <FormControl type="text" placeholder="Search"/>
            </FormGroup>
            {' '}
            <Button type="submit">Submit</Button>
          </Navbar.Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default TopBar;
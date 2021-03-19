import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import {Link} from 'react-router-dom'

export default function VGNavBar(){
    return(
        <Navbar variant='dark'>
            <Navbar.Brand>Video-Game Backlog Tracker</Navbar.Brand>
            <Nav defaultActiveKey="/">
                <Nav.Link as={Link} to="/">Search</Nav.Link>
                <Nav.Link as={Link} to="/backlog">Backlog</Nav.Link>
                <Nav.Link href="/login" eventKey="login">Log In</Nav.Link>
            </Nav>
            <Nav className="ml-auto mr-3">
                <Nav.Link href="https://rawg.io">Rawg.io</Nav.Link>
            </Nav>
        </Navbar>
    )
}
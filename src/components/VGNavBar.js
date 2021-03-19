import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import {Link} from 'react-router-dom'

export default function VGNavBar(props){
    return(
        <Navbar variant='dark'>
            <Navbar.Brand>Video-Game Backlog Tracker</Navbar.Brand>
            <Nav defaultActiveKey="search">
                <Nav.Link as={Link} to="/">Search</Nav.Link>
                <Nav.Link as={Link} to="/backlog">Backlog</Nav.Link>
                <Nav.Link href="/login" eventKey="login">Log In</Nav.Link>
            </Nav>
        </Navbar>
    )
}
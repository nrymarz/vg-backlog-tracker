import React from "react"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import {Link} from 'react-router-dom'

export default function PhoneNav({renderLogin, renderUser}){
    
    return(
        <Navbar variant='dark' className="phone-nav">
            <Nav defaultActiveKey="/" className="d-flex flex-column">
                <Nav.Link as={Link} to="/">Search</Nav.Link>
                <Nav.Link as={Link} to="/backlog">Backlog</Nav.Link>
                {renderUser()}
                {renderLogin()}
                <Nav.Link href="https://rawg.io">Rawg.io</Nav.Link>
            </Nav>
        </Navbar>
    )
}
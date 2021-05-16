import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import BurgerMenu from './burgerMenu'
import PhoneNav from './phoneNav'
import Accordian from 'react-bootstrap/Accordion'
import {Link} from 'react-router-dom'


export default function VGNavBar({user}){

    function renderUser(){
        if(user.length > 0) return <Navbar.Text className="mx-3">Logged In as {user}</Navbar.Text>
    }

    function renderLogin(){
        if(user.length > 0) return <Nav.Link as={Link} to='/logout'>Log Out</Nav.Link>
        return <Nav.Link as={Link} to='/login'>Log In</Nav.Link>
    }
    
    return(
        <Accordian>
            <Navbar variant='dark'>
                <Navbar.Brand>VG Backlog Tracker</Navbar.Brand>
                <Nav defaultActiveKey="/" className="hideable-phone">
                    <Nav.Link as={Link} to="/">Search</Nav.Link>
                    <Nav.Link as={Link} to="/backlog">Backlog</Nav.Link>
                    {renderLogin()}
                </Nav>
                <Nav className="ml-auto mr-3 hideable-phone">
                    {renderUser()}
                    <Nav.Link href="https://rawg.io">Rawg.io</Nav.Link>
                </Nav>
                <BurgerMenu eventKey="0" />
            </Navbar>
            <PhoneNav renderUser={renderUser} renderLogin={renderLogin}/>
        </Accordian>
    )
}

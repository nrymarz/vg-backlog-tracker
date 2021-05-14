import React, {useRef} from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import BurgerMenu from './burgerMenu'
import {Link} from 'react-router-dom'


export default function VGNavBar({user}){

    const targetRef = useRef(null)

    function renderUser(){
        if(user.length > 0) return <Navbar.Text className="mx-3">Logged In as {user}</Navbar.Text>
    }

    function renderLogin(){
        if(user.length > 0) return <Nav.Link as={Link} to='/logout'>Log Out</Nav.Link>
        return <Nav.Link as={Link} to='/login'>Log In</Nav.Link>
    }

    function changeMenu(open){
        if(open) targetRef.current.style.display="flex"
        else targetRef.current.style.display="none"
    }
    
    return(
        <>
            <Navbar variant='dark'>
                <Navbar.Brand>VG Backlog Tracker</Navbar.Brand>
                <Nav defaultActiveKey="/" className="hideable-phone">
                    <Nav.Link as={Link} to="/">Search</Nav.Link>
                    <Nav.Link as={Link} to="/backlog">Backlog</Nav.Link>
                    {renderLogin()}
                </Nav>
                <Nav className="ml-auto mr-3">
                    {renderUser()}
                    <Nav.Link href="https://rawg.io">Rawg.io</Nav.Link>
                    <BurgerMenu changeMenu={changeMenu}/>
                </Nav>
            </Navbar>
            <Navbar variant='dark' className="phone-nav" ref={targetRef}>
                <Nav defaultActiveKey="/" className="d-flex flex-column">
                    <Nav.Link as={Link} to="/">Search</Nav.Link>
                    <Nav.Link as={Link} to="/backlog">Backlog</Nav.Link>
                    {renderLogin()}
                </Nav>
            </Navbar>
        </>
    )
}
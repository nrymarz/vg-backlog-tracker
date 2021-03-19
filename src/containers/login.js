import React,{Component} from 'react'
import UserForm from '../components/userForm'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

class Login extends Component{
    render(){
        return(
            <Container className="text-center">
                <h2>Login</h2>
                <Row className = 'd-flex justify-content-center'>
                    <UserForm submit="Log In"/>
                </Row>
                <br></br>
                <h2>Or</h2>
                <br></br>
                <h2>Sign Up</h2>
                <Row className = 'd-flex justify-content-center'>
                    <UserForm submit="Sign Up"/>
                </Row>
            </Container>
        )
    }
}

export default Login
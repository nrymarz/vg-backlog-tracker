import React,{Component} from 'react'
import {connect} from 'react-redux'
import {loadGamesFromUser, addUser} from '../actions/backlogActions'
import UserForm from '../components/userForm'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Alert from 'react-bootstrap/Alert'

class Login extends Component{
    state={
        error:'',
        success: false
    }

    handleLogin = (username,password) =>{
        const backlog = JSON.stringify(this.props.backlog)
        const configObj={
            method:"POST",
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify({user:{username: username, password: password,backlog: backlog}})
        }
        fetch('http://localhost:3000/login',configObj)
            .then(res => res.json())
            .then(json => this.tryLogIn(json))
    }

    handleSignUp = (username,password) =>{
        const configObj={
            method: "POST",
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify({user:{username: username, password: password}})
        }
        fetch('http://localhost:3000/users', configObj)
            .then(res => res.json())
            .then(json => this.tryLogIn(json))
            
    }

    tryLogIn(json){
        if(json.error){
            this.setState({
                error: json.error
            })
        }
        else{
            localStorage.setItem('jwt',json.jwt)
            const backlog = JSON.parse(json.user.backlog)  
            if(backlog) this.props.loadGamesFromUser(backlog)
            this.props.addUser(json.user.username)
            this.setState({
                error:'',
                success: true
            })
        }
    }

    renderAlert(){
        if(this.state.error.length>0) return <Alert variant='danger'>{this.state.error}</Alert>
        else if(this.state.success) return <Alert variant='success'>Successfully logged in.</Alert>
    }

    render(){
        return(
            <Container className="text-center">
                {this.renderAlert()}
                <br></br>
                <h2>Login</h2>
                <Row className = 'd-flex justify-content-center'>
                    <UserForm submit="Log In" handleSubmit={this.handleLogin}/>
                </Row>
                <br></br>
                <h2>Or</h2>
                <br></br>
                <h2>Sign Up</h2>
                <Row className = 'd-flex justify-content-center'>
                    <UserForm submit="Sign Up" handleSubmit={this.handleSignUp}/>
                </Row>
            </Container>
        )
    }
}

const mSTP = state =>{
    return {
        backlog: state.backlog
    }
}

const mDTP = dispatch =>{
    return{
        loadGamesFromUser: (games)=>dispatch(loadGamesFromUser(games)),
        addUser: user => dispatch(addUser(user))
    }
}

export default connect(mSTP,mDTP)(Login)
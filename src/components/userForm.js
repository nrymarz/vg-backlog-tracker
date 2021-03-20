import React, {Component} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class UserForm extends Component{
    state={
        username:'',
        password:''
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event =>{
        event.preventDefault()
        this.props.handleSubmit(this.state.username,this.state.password)
        this.setState({
            username:'',
            password:''
        })
    }

    render(){
        return(
            <Form onSubmit={this.handleSubmit}>
                <Form.Control type='text' name='username' value={this.state.username} onChange={this.handleChange} placeholder="username"/>
                <Form.Control type='password' name='password' value={this.state.password} onChange={this.handleChange} placeholder="password"/>
                <Button variant="primary" type="submit" block>{this.props.submit}</Button>
            </Form>
        )
    }
}

export default UserForm
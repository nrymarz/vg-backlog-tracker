import React, {useState} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function UserForm({submit, handleLogin}){

    const [userInfo, setUserInfo] = useState({username:'',password:''})

    const handleChange = event => {
        let newInfo = Object.assign({},userInfo)
        newInfo[event.target.name] = event.target.value
        console.log(newInfo)
        setUserInfo(newInfo)
    }

    const handleSubmit = event =>{
        event.preventDefault()
        handleLogin(userInfo.username,userInfo.password)
        setUserInfo({
            username:'',
            password:''
        })
    }

    return(
        <Form onSubmit={handleSubmit}>
            <Form.Control type='text' name='username' value={userInfo.username} onChange={handleChange} placeholder="username"/>
            <Form.Control type='password' name='password' value={userInfo.password} onChange={handleChange} placeholder="password"/>
            <Button variant="primary" type="submit" block>{submit}</Button>
        </Form>
    )
}

export default UserForm
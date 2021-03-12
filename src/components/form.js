import React, {Component} from 'react'

export default class Form extends Component {
    state = {
        text:''
    }

    handleChange = event => {
        this.setState({
            text: event.target.value
        })
    }

    handleSubmit = event =>{
        event.preventDefault()
        //this.props.dosomething
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.text} name="search" onChange={this.handleChange}/>
                <input type="submit" value="Search"/>
            </form>
        )
    }
}
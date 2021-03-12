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
        this.props.fetchGames()
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.text} name="search" onChange={this.handleChange} placeholder="Search by title"/>
                <input type="submit" value="Search"/>
            </form>
        )
    }
}
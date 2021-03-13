import React, {Component} from 'react'
import Form from 'react-bootstrap/Form'
import Button from'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'

export default class SearchForm extends Component {
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
        this.props.fetchGames(
            {
            search: this.state.text
            }
        )
    }

    render(){
        return(
            <Form onSubmit={this.handleSubmit}>
                <Form.Row>
                    <Col>
                        <Form.Control type="text" value={this.state.text} name="search" onChange={this.handleChange} placeholder="Search by title"/>
                    </Col>
                    <Col>
                        <Button variant="primary" type="submit">Search</Button>
                    </Col>
                </Form.Row>
            </Form>
        )
    }
}
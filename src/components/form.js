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

    renderOptions = () =>{
        return this.props.genres.map(genre=> <option>{genre.name}</option>)
    }

    render(){
        return(
            <Form onSubmit={this.handleSubmit}>
                <Form.Row className="px-4 my-3">
                    <Col>
                        <Form.Control type="text" value={this.state.text} name="search" onChange={this.handleChange} placeholder="Search by title"/>
                    </Col>
                    <Col>
                        <Form.Control as="select">
                            {this.renderOptions()}
                        </Form.Control>
                    </Col>
                    <Col>
                        <Button variant="primary" type="submit">Search</Button>
                    </Col>
                </Form.Row>
            </Form>
        )
    }
}
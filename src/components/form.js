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

    renderGenreOptions = () =>{
        return this.props.genres.map(genre=> <option key={genre.id}>{genre.name}</option>)
    }

    renderPlatformOptions = () =>{
        return this.props.platforms.map(platform => <option key={platform.id}>{platform.name}</option>)
    }

    render(){
        return(
            <Form onSubmit={this.handleSubmit}>
                <Form.Row className="px-4 my-3">
                    <Col xs={5}>
                        <Form.Control type="text" value={this.state.text} name="search" onChange={this.handleChange} placeholder="Search by title"/>
                    </Col>
                    <Col>
                        <Form.Control as="select" id="genres" defaultValue="none">
                            <option value="none" disabled hidden>Select a Genre</option>
                            {this.renderGenreOptions()}
                        </Form.Control>
                    </Col>
                    <Col>
                        <Form.Control as="select" id="platforms" defaultValue="none">
                            <option value="none" disabled hidden>Select a Platform</option>
                            {this.renderPlatformOptions()}
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
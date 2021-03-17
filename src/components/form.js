import React, {Component} from 'react'
import Form from 'react-bootstrap/Form'
import Button from'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'

export default class SearchForm extends Component {
    state = {
        text:'',
        platform: 0,
        genre: 0
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
            search: this.state.text,
            platform: this.state.platform,
            genre: this.state.genre
            }
        )
    }

    handleSelectChange = event =>{
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    renderGenreOptions = () =>{
        return this.props.genres.map(genre=> <option value= {genre.id} key={genre.id}>{genre.name}</option>)
    }

    renderPlatformOptions = () =>{
        return this.props.platforms.map(platform => <option value={platform.id} key={platform.id}>{platform.name}</option>)
    }

    render(){
        return(
            <Form onSubmit={this.handleSubmit}>
                <Form.Row className="px-4 my-3">
                    <Col xs={5}>
                        <Form.Control type="text" value={this.state.text} name="search" onChange={this.handleChange} placeholder="Search by title"/>
                    </Col>
                    <Col>
                        <Form.Control as="select" name="genre" onChange={this.handleSelectChange} value={this.state.genre}>
                            <option value="0">Select a Genre</option>
                            {this.renderGenreOptions()}
                        </Form.Control>
                    </Col>
                    <Col>
                        <Form.Control as="select" name="platform" defaultValue="">
                            <option value="">Select a Platform</option>
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
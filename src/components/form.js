import React, {useState} from 'react'
import Form from 'react-bootstrap/Form'
import Button from'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'


export default function SearchForm({genres, platforms, fetchGames}) {

    const [query, setQuery] = useState({search:'', platform:0, genre:0})

    const handleChange = event => {
        setQuery(prevState =>{
            return {...prevState, [event.target.name]: event.target.value}
        })
    }

    const handleSubmit = event =>{
        event.preventDefault()
        fetchGames(query)
    }

    const renderGenreOptions = () =>{
        return genres.map(genre=> <option value= {genre.id} key={genre.id}>{genre.name}</option>)
    }

    const renderPlatformOptions = () =>{
        return platforms.map(platform => <option value={platform.id} key={platform.id}>{platform.name}</option>)
    }

    return(
        <Form onSubmit={handleSubmit}>
            <Form.Row className="px-4 my-3">
                <Col xs={6}>
                    <Form.Control type="text" value={query.search} name="search" onChange={handleChange} placeholder="Search by title"/>
                </Col>
                <Col>
                    <Form.Control as="select" name="genre" onChange={handleChange} value={query.genre}>
                        <option value="0">All Genres</option>
                        {renderGenreOptions()}
                    </Form.Control>
                </Col>
                <Col>
                    <Form.Control as="select" name="platform" value={query.platform} onChange={handleChange}>
                        <option value="0">All Platforms</option>
                        {renderPlatformOptions()}
                    </Form.Control>
                </Col>
                <Col xs={1}>
                    <Button variant="primary" type="submit" block>Search</Button>
                </Col>
            </Form.Row>
        </Form>
    )
}
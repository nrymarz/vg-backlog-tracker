import React from 'react'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'

const VideoGame = ({game}) => {
    function renderPlatforms(){
        if(game.platforms) return <Card.Text> Platforms: {game.platforms.map(pf => pf.platform.name).join(', ')} </Card.Text>
    }

    return(
        <Col sm={4} lg={3} xl={2}>
            <Card border="dark" bg="primary" text="light" className="mt-3">
                <Card.Img src={game.background_image} alt={game.name} />
                <Card.Body>
                    <Card.Title>{game.name}</Card.Title>
                    <Card.Text> Released: {game.released} </Card.Text>
                    {renderPlatforms()}
                </Card.Body>
            </Card>
        </Col>
    )
}

export default VideoGame
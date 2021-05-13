import React from 'react'
import Card from 'react-bootstrap/Card'

export default function VGCardFace({game}){
    return(
        <>
            <Card.Img src={game.background_image || './unavailable-image.jpg'} alt={game.name} style={{maxHeight:'25rem'}}/>
            <Card.Body>
                <Card.Title>{game.name}</Card.Title>
                <Card.Subtitle> Released: {game.released} </Card.Subtitle>
                <Card.Text>Genres: {game.genres.map(genre =>genre.name).join(', ')}</Card.Text>
            </Card.Body>
        </>
    )
}
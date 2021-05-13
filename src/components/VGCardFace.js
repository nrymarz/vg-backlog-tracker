import React from 'react'
import Card from 'react-bootstrap/Card'

export default function VGCardFace({background_image, name, released, genres}){
    return(
        <>
            <Card.Img src={background_image || './unavailable-image.jpg'} alt={name} style={{maxHeight:'25rem'}}/>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Subtitle> Released: {released} </Card.Subtitle>
                <Card.Text>Genres: {genres.map(genre =>genre.name).join(', ')}</Card.Text>
            </Card.Body>
        </>
    )
}
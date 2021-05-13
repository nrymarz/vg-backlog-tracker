import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export default function VGCardFace({esrb_rating, rating, platforms, height, handleBtnClick, btnDisabled}){

    function renderRating(){
        if(esrb_rating) return <Card.Text>Rated: {esrb_rating.name}</Card.Text>
    }

    function renderPlatforms(){
        if(platforms) return <Card.Text> Platforms: {platforms.map(pf => pf.platform.name).join(', ')} </Card.Text>
    }
        
    return(
        <Card.Body className="d-inline-flex flex-column justify-content-center"  style={{minHeight: height-2}}>
            {renderRating()}
            <Card.Text>Average Review: {rating} / 5</Card.Text>
            {renderPlatforms()}
            <Button variant="secondary" className="mt-auto" onClick={handleBtnClick} disabled={btnDisabled}>Add to Backlog</Button>
        </Card.Body>
    )
}
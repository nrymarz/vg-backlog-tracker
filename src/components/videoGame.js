import React, {Component} from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'

class VideoGame extends Component{
    state={
        border: 'dark',
        bg: 'primary',
        clicked: false
    }

    handleMouseEnter = () =>{
        this.setState({
            border: 'info'
        })
    }

    handleMouseLeave = () =>{
        this.setState({
            border: this.state.clicked ? 'secondary' : 'primary'
        })
    }

    handleClick = () =>{
        this.setState({
            clicked: !this.state.clicked,
            bg: this.state.clicked ? 'primary' : 'dark'
        })
    }

    renderFace(){
        const game = this.props.game
        if(this.state.clicked){
            return(
                <Card.Body className="d-inline-flex flex-column justify-content-center">
                    {this.renderRating()}
                    <Card.Text>Average Review: {game.rating} / 5</Card.Text>
                    {this.renderPlatforms()}
                    <Button variant="secondary" className="mt-auto">Add to Backlog</Button>
                </Card.Body>
            )
        }
        return(
            <>
                <Card.Img src={game.background_image || './unavailable-image.jpg'} alt={game.name} style={{maxHeight:"16rem"}}/>
                <Card.Body>
                    <Card.Title>{game.name}</Card.Title>
                    <Card.Subtitle> Released: {game.released} </Card.Subtitle>
                    <Card.Text>Genres: {game.genres.map(genre =>genre.name).join(', ')}</Card.Text>
                </Card.Body>
            </>
        )
    }

    renderRating(){
        if(this.props.game.esrb_rating) return <Card.Text>Rated: {this.props.game.esrb_rating.name}</Card.Text>
    }

    renderPlatforms(){
        const game = this.props.game
        if(game.platforms) return <Card.Text> Platforms: {game.platforms.map(pf => pf.platform.name).join(', ')} </Card.Text>
    }

    render(){
        const game = this.props.game
        return(
            <Col sm={6} lg={4} xl={3} className="mb-3" style={{height:"23rem"}}>
                <Card 
                    border={this.state.border}
                    bg={this.state.bg} 
                    text="light"
                    className="h-100"  
                    onMouseEnter={this.handleMouseEnter} 
                    onMouseLeave={this.handleMouseLeave} 
                    onClick={this.handleClick}
                    >
                    {this.renderFace()}
                </Card>
            </Col>
        )
    }   
}

export default VideoGame
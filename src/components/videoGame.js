import React, {Component} from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'

class VideoGame extends Component{
    state={
        bg: 'primary',
        clicked: false
    }

    handleMouseEnter = () =>{
        this.setState({
            bg: this.state.clicked ? 'dark' : 'info'
        })
    }

    handleMouseLeave = () =>{
        this.setState({
            bg: this.state.clicked ? 'secondary' : 'primary'
        })
    }

    handleClick = () =>{
        this.setState({
            clicked: !this.state.clicked,
            bg: !this.state.clicked ? 'dark' : 'info'
        })
    }

    renderFace(){
        const game = this.props.game
        if(this.state.clicked){
            return(
                <Card.Body>
                    <Button variant="secondary">Add to Backlog</Button>
                </Card.Body>
            )
        }
        return(
            <Card.Body>
                <Card.Title>{game.name}</Card.Title>
                <Card.Text> Released: {game.released} </Card.Text>
                {this.renderPlatforms()}
            </Card.Body>
        )
    }

    renderPlatforms(){
        const game = this.props.game
        if(game.platforms) return <Card.Text> Platforms: {game.platforms.map(pf => pf.platform.name).join(', ')} </Card.Text>
    }

    render(){
        const game = this.props.game
        return(
        <Col sm={4} lg={3} xl={2}>
            <Card border="dark" bg={this.state.bg} text="light" className="mt-3" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} onClick={this.handleClick}>
                <Card.Img src={game.background_image || './unavailable-image.jpg'} alt={game.name} />
                {this.renderFace()}
            </Card>
        </Col>
        )
    }   
}

export default VideoGame
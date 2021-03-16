import React, {Component} from 'react'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'

class VideoGame extends Component{
    state={
        bg: 'primary'
    }

    handleMouseEnter = () =>{
        this.setState({
            bg: "info"
        })
    }

    handleMouseLeave = () =>{
        this.setState({
            bg:'primary'
        })
    }

    renderPlatforms(){
        const game = this.props.game
        if(game.platforms) return <Card.Text> Platforms: {game.platforms.map(pf => pf.platform.name).join(', ')} </Card.Text>
    }

    render(){
        const game = this.props.game
        return(
        <Col sm={4} lg={3} xl={2}>
            <Card border="dark" bg={this.state.bg} text="light" className="mt-3" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
                <Card.Img src={game.background_image || './unavailable-image.jpg'} alt={game.name} />
                <Card.Body>
                    <Card.Title>{game.name}</Card.Title>
                    <Card.Text> Released: {game.released} </Card.Text>
                    {this.renderPlatforms()}
                </Card.Body>
            </Card>
        </Col>
        )
    }   
}

export default VideoGame
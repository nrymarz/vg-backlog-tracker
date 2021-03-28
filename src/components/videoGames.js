import React, {Component} from 'react'
import VideoGame from './videoGame'
import Spinner from 'react-bootstrap/Spinner'
import CardGroup from 'react-bootstrap/CardGroup'
import Container from 'react-bootstrap/Container'

class VideoGames extends Component {
    renderGames(){
        if(this.props.loading) return <> <Spinner animation="border" variant="primary"/> Finding Games... </>
        else if(this.props.games.length===0) return <h4>No games found.</h4>
        return(
            <CardGroup>
                {this.props.games.map(game => <VideoGame game={game} key={game.id} addToBacklog={this.props.addToBacklog} backlog={this.props.backlog} isLoggedIn={this.props.isLoggedIn}/> )}
            </CardGroup>
        )
    }

    render(){
        return (
            <Container fluid>
                {this.renderGames()}
            </Container>
        )
       
    }

}

export default VideoGames
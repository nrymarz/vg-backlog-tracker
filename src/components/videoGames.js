import React, {Component} from 'react'
import VideoGame from './videoGame'
import Spinner from 'react-bootstrap/Spinner'
import CardDeck from 'react-bootstrap/CardDeck'
import Container from 'react-bootstrap/Container'

class VideoGames extends Component {
    renderGames(){
        if(this.props.loading) return <> <Spinner animation="border" variant="primary"/> Finding Games... </>
        else if(this.props.games.length===0 && this.props.hasSearched) return <h4>No games found.</h4>
        return(
            <CardDeck >
                {this.props.games.map(game => <VideoGame game={game} key={game.id}/>)}
            </CardDeck>
        )
    }

    render(){
        return (
            <Container fluid className="align-items-start">
                {this.renderGames()}
            </Container>
        )
       
    }

}

export default VideoGames
import React, {Component} from 'react'
import VideoGame from '../components/videoGame'
import Spinner from 'react-bootstrap/Spinner'
import CardGroup from 'react-bootstrap/CardGroup'
import Container from 'react-bootstrap/Container'

class VideoGames extends Component {
    addToBacklog = (game) =>{
        this.props.addToBacklog(this.props.game)
        if(this.props.isLoggedIn){
            game.status = "NOT_STARTED"
            let backlog = [...this.props.backlog, game]
            backlog = JSON.stringify(backlog.map(game =>{return {name:game.name,status:game.status,id:game.id}}))
            const configObj={
                method: "POST",
                headers:{'Content-Type':'application/json','Authorization':`Bearer ${localStorage.getItem('jwt')}`},
                body: JSON.stringify({user:{backlog: backlog}})
            }
            fetch('http://localhost:3000/update',configObj)
        }
    }
    renderGames(){
        if(this.props.loading) return <> <Spinner animation="border" variant="primary"/> Finding Games... </>
        else if(this.props.games.length===0) return <h4>No games found.</h4>
        return(
            <CardGroup>
                {this.props.games.map(game => <VideoGame game={game} key={game.id} addToBacklog={this.addToBacklog} backlog={this.props.backlog} isLoggedIn={this.props.isLoggedIn}/> )}
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
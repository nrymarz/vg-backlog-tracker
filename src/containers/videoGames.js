import React, {Component} from 'react'
import VideoGame from '../components/videoGame'
import Spinner from 'react-bootstrap/Spinner'
import CardGroup from 'react-bootstrap/CardGroup'
import Container from 'react-bootstrap/Container'

class VideoGames extends Component {
    addToBacklog = (game) =>{
        this.props.addToBacklog(game)
        if(this.props.isLoggedIn()){
            game.status = "NOT_STARTED"
            let backlog = [...this.props.backlog, game]
            backlog = JSON.stringify(backlog.map(game =>{return {name:game.name,status:game.status,id:game.id}}))
            const configObj={
                method: "POST",
                headers:{'Content-Type':'application/json','Authorization':`Bearer ${localStorage.getItem('jwt')}`},
                body: JSON.stringify({user:{backlog: backlog}})
            }
            fetch('https://vg-backlog-tracker-api.herokuapp.com/update',configObj)
        }
    }
    renderGames(){
        if(this.props.loading) return <div className="loader"> <Spinner animation="border" variant="primary"/> Finding Games... </div>
        else if(this.props.games.length===0) return <h4>No games found.</h4>
        return(
            <CardGroup>
                {this.props.games.map(game => <VideoGame game={game} key={game.id} isBtnDisabled={this.props.backlog.find(g => g.id === game.id)} addToBacklog={this.addToBacklog} backlog={this.props.backlog}/> )}
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
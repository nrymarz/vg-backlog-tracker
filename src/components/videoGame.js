import React, {Component} from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'

class VideoGame extends Component{
    state={
        isFlipped: false,
        btnDisabled: this.props.backlog.find(game => this.props.game.id === game.id)
    }

    targetRef = React.createRef();
    height = null

    handleClick = () =>{

        this.height = this.targetRef.current.offsetHeight
        this.setState({
            isFlipped: !this.state.isFlipped
        })
    }

    handleBtnClick = e =>{
        e.stopPropagation()
        this.props.addToBacklog(this.props.game)
        this.setState({
            btnDisabled: true
        })
        if(localStorage.getItem('jwt')){
            let backlog = [...this.props.backlog,this.props.game]
            backlog = JSON.stringify(backlog.map(game =>{return {name:game.name,status:game.status,id:game.id}}))
            const configObj={
                method: "POST",
                headers:{'Content-Type':'application/json','Authorization':`Bearer ${localStorage.getItem('jwt')}`},
                body: JSON.stringify({user:{backlog: backlog}})
            }
            fetch('http://localhost:3000/update',configObj)
        }
    }

    renderFace(){
        const game = this.props.game
        if(this.state.isFlipped){
            return(
                <Card.Body className="d-inline-flex flex-column justify-content-center"  style={{minHeight: this.height-2}}>
                    {this.renderRating()}
                    <Card.Text>Average Review: {game.rating} / 5</Card.Text>
                    {this.renderPlatforms()}
                    <Button variant="secondary" className="mt-auto" onClick={this.handleBtnClick} disabled={this.state.btnDisabled}>Add to Backlog</Button>
                </Card.Body>
            )
        }
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

    renderRating(){
        if(this.props.game.esrb_rating) return <Card.Text>Rated: {this.props.game.esrb_rating.name}</Card.Text>
    }

    renderPlatforms(){
        if(this.props.game.platforms) return <Card.Text> Platforms: {this.props.game.platforms.map(pf => pf.platform.name).join(', ')} </Card.Text>
    }

    render(){
        return(
            <Col sm={4} lg={3} xl={2} className="my-3" ref={this.targetRef}>
                <Card 
                    text="light"
                    onClick={this.handleClick}
                    className= "h-100"
                    >
                    {this.renderFace()}
                </Card>
            </Col>
        )
    }   
}

export default VideoGame
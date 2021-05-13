import React, {Component} from 'react'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'

import VGCardFace from './VGCardFace'
import VGCardBack from './VGCardBack'

class VideoGame extends Component{
    
    state={
        isFlipped: false,
        btnDisabled: this.props.btnDisabled
    }

    targetRef = React.createRef();
    height = null

    handleClick = () =>{
        this.height = this.targetRef.current.offsetHeight
        this.setState({
            isFlipped: !this.state.isFlipped
        })
    }

    handleBtnClick = event =>{
        event.stopPropagation()
        this.props.addToBacklog(this.props.game)
        this.setState({
            btnDisabled: true
        })
        if(localStorage.getItem('jwt')){
            this.props.game.status = "NOT_STARTED"
            let backlog = [...this.props.backlog,this.props.game]
            backlog = JSON.stringify(backlog.map(game =>{return {name:game.name,status:game.status,id:game.id}}))
            const configObj={
                method: "POST",
                headers:{'Content-Type':'application/json','Authorization':`Bearer ${localStorage.getItem('jwt')}`},
                body: JSON.stringify({user:{backlog: backlog}})
            }
            fetch('https://vg-backlog-tracker-api.herokuapp.com/update',configObj)
        }
    }

    renderCard(){
        if(this.state.isFlipped) {
            return(
                <VGCardBack 
                esrb_rating={this.props.game.esrb_rating} 
                platforms={this.props.game.platforms} 
                rating={this.props.game.rating}
                height={this.height}
                handleBtnClick={this.handleBtnClick}
                />
            )
        }
        return <VGCardFace game={this.props.game} />
    }

    render(){
        return(
            <Col sm={4} lg={3} xl={2} className="my-3" ref={this.targetRef}>
                <Card 
                    text="light"
                    onClick={this.handleClick}
                    className= "h-100"
                    >
                    {this.renderCard()}
                </Card>
            </Col>
        )
    }   
}

export default VideoGame
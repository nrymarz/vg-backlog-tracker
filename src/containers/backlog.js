import React,{Component} from 'react'
import {addToBacklog, removeFromBacklog} from '../actions/backlogActions'
import {connect} from 'react-redux'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import BacklogList from '../components/backlogList'

class Backlog extends Component {
    state={
        COMPLETED: this.props.backlog.filter(game=>game.status==="COMPLETED"),
        STARTED: this.props.backlog.filter(game=>game.status==="STARTED"),
        NOT_STARTED: this.props.backlog.filter(game=>game.status==="NOT_STARTED")
    }

    handleSelect = (event,game) =>{
        let gameStatus = game.status
        game.status = event
        this.setState(prevState =>{
            return{
                [gameStatus]: prevState[gameStatus].filter(g => g.id!== game.id),
                [event]: [...prevState[event], game]
            }
        })
    }

    render(){
        return(
            <Row className="text-center">
                 <Col xs={4} >
                    <h2>Backlog:</h2>
                    <BacklogList games={this.state.NOT_STARTED} variant="danger" handleSelect={this.handleSelect}/>
                </Col>

                <Col xs={4}>
                    <h2>Currently Playing:</h2>
                    <BacklogList games={this.state.STARTED} variant="info" handleSelect={this.handleSelect}/>
                </Col>
               
                <Col xs={4}>
                    <h2>Completed:</h2>
                    <BacklogList games={this.state.COMPLETED} variant="success" handleSelect={this.handleSelect}/>
                </Col>
            </Row>
        )
    }
}
const mSTP = state =>{
    return{
        backlog: state.backlog
    }
}

const mDTP = dispatch =>{
    return{
        addGame: (game)=>dispatch(addToBacklog(game)),
        removeGame: (game)=>dispatch(removeFromBacklog(game))
    }
}

export default connect(mSTP,mDTP)(Backlog)
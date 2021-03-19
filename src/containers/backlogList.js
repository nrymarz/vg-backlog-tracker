import React,{Component} from 'react'
import ListGroup from 'react-bootstrap/ListGroup'

export default class BacklogList extends Component{
    handleClick = game =>{
        switch(game.status){
            case "NOT_STARTED": game.status = "STARTED"
            case "STARTED": game.status = "COMPLETED"
            case "COMPLETED": game.status = "NOT_STARTED"
        }

    }

    renderGames(){
        return games.map(game=><ListGroup.Item variant={variant} onClick={()=>handleClick(game)}>{game.name}</ListGroup.Item>)
    }

    render(){
        return(
            <ListGroup>
                {renderGames()}
            </ListGroup>
        )
    }
}
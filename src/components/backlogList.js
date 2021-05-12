import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import Dropdown from 'react-bootstrap/Dropdown'

export default function BacklogList({games, variant, handleSelect, handleRemove}){

    function renderGames(){
        return games.map( game=> {
            return(
                <ListGroup.Item variant={variant} key={game.id} >
                    <h5>
                        {game.name}
                        <Dropdown as="span">
                            <Dropdown.Toggle variant={variant} className='float-right'/>
                            <Dropdown.Menu>
                                <Dropdown.Item disabled={game.status==="NOT_STARTED"} eventKey='NOT_STARTED' onSelect={event => handleSelect(event,game)}>Move To Backlog</Dropdown.Item>
                                <Dropdown.Item disabled={game.status==="STARTED"} eventKey='STARTED' onSelect={event => handleSelect(event,game)}>Move To Currently Playing</Dropdown.Item>
                                <Dropdown.Item disabled={game.status==="COMPLETED"} eventKey='COMPLETED' onSelect={event => handleSelect(event,game)}>Move To Completed</Dropdown.Item>
                                <Dropdown.Item onSelect={() => handleRemove(game)}>Remove Game</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </h5>
                </ListGroup.Item>
            )
        })
    }

    return(
        <ListGroup>
            {renderGames()}
        </ListGroup>
    )
}
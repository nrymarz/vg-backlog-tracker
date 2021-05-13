import React, {useState, useRef} from 'react'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'

import VGCardFace from './VGCardFace'
import VGCardBack from './VGCardBack'

function VideoGame({game, isBtnDisabled, backlog, addToBacklog}){

    const [isFlipped, setIsFlipped] = useState(false)
    const [btnDisabled, setBtnDisabled] = useState(isBtnDisabled)

    const handleClick = () =>{
        setIsFlipped(prevState => !prevState)
    }
    const targetRef = useRef(null)

    const handleBtnClick = event =>{
        event.stopPropagation()
        addToBacklog(game)
        setBtnDisabled(true)
        if(localStorage.getItem('jwt')){
            game.status = "NOT_STARTED"
            let backlogCopy = [...backlog,game]
            backlogCopy = JSON.stringify(backlogCopy.map(game =>{return {name:game.name,status:game.status,id:game.id}}))
            const configObj={
                method: "POST",
                headers:{'Content-Type':'application/json','Authorization':`Bearer ${localStorage.getItem('jwt')}`},
                body: JSON.stringify({user:{backlog: backlogCopy}})
            }
            fetch('https://vg-backlog-tracker-api.herokuapp.com/update',configObj)
        }
    }

    function renderCard(){
        if(isFlipped) {
            return(
                <VGCardBack 
                    esrb_rating={game.esrb_rating} 
                    platforms={game.platforms} 
                    rating={game.rating}
                    height={targetRef.current.offsetHeight}
                    handleBtnClick={handleBtnClick}
                    btnDisabled={btnDisabled}
                />
            )
        }
        return <VGCardFace game={game} />
    }
    return(
        <Col sm={4} lg={3} xl={2} className="my-3" ref={targetRef}>
            <Card text="light" onClick={handleClick} className= "h-100">
                {renderCard()}
            </Card>
        </Col>
    )   
}

export default VideoGame
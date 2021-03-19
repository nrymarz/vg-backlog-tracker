const addToBacklog = (game) =>{
    return {type:"ADD_TO_BACKLOG", game: game}
}

const removeFromBacklog = (game) =>{
    return {type:"REMOVE_FROM_BACKLOG", game: game}
}

export {addToBacklog, removeFromBacklog}
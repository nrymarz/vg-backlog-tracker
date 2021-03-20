const addToBacklog = (game) =>{
    return {type:"ADD_TO_BACKLOG", game: game}
}

const removeFromBacklog = (game) =>{
    return {type:"REMOVE_FROM_BACKLOG", game: game}
}

const addUser = user =>{
    return {type:"ADD_USER", user: user}
}

const clearBacklog = () =>{
    return {type:"CLEAR_BACKLOG"}
}

const loadGamesFromUser = (games) =>{
    return {type:"LOAD_GAMES_FROM_USER", games: games}
}

export {addToBacklog, removeFromBacklog, addUser,clearBacklog, loadGamesFromUser}
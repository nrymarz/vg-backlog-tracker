const videoGameList = (state={
    games: [],
    loading: false
},action) =>{
    switch(action.type){
        case "START_ADDING_GAMES":
            return {...state, loading:true}
        case "ADD_GAMES":
            return {
                ...state,
                games: action.games,
                loading: false
            }
        default:
            return state
    }
}

export default videoGameList


const videoGameList = (state={
    games: [],
    loading: false,
    hasSearched:false
},action) =>{
    switch(action.type){
        case "START_ADDING_GAMES":
            return {...state, loading:true}
        case "ADD_GAMES":
            return {
                ...state,
                games: action.games,
                loading: false,
                hasSearched: true
            }
        default:
            return state
    }
}

export default videoGameList


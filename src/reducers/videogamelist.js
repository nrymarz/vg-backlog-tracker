const videoGameList = (state={
    games: [],
    loading: false,
    next_page: ''
    },action) =>{
    switch(action.type){
        case "START_ADDING_GAMES":
            return {...state, loading:true}
        case "ADD_GAMES":
            return {
                games: action.games,
                loading: false,
                next_page: action.next_page
            }
        case "ADD_MORE_GAMES":
            return {
                ...state,
                games: state.games.concat(action.games),
                next_page: action.next_page
            }
        default:
            return state
    }
}

export default videoGameList


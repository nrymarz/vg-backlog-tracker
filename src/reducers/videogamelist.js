const videoGameList = (state={
    user:'',
    backlog:[],
    platforms:[],
    genres:[],
    games: [],
    loading: false,
    next_page: ''
    },action) =>{
    switch(action.type){
        case "ADD_USER":
            return{
                ...state,
                user: action.user
            }
        case "LOAD_GAMES_FROM_USER":
            return{
                ...state,
                backlog: action.games
            }
        case "ADD_TO_BACKLOG":
            return{
                ...state,
                backlog:[...state.backlog, {...action.game, status:"NOT_STARTED"} ]
            }
        case "REMOVE_FROM_BACKLOG":
            return{
                ...state,
                backlog: state.backlog.filter(game => game.id !== action.game.id)
            }
        case "CLEAR_BACKLOG":
            return{
                ...state,
                backlog:[]
            }
        case "ADD_PLATFORMS":
            return{
                ...state,
                platforms: action.platforms
            }
        case "ADD_GENRES":
            return{
                ...state,
                genres: action.genres
            }
        case "START_ADDING_GAMES":
            return {...state, loading:true}
        case "ADD_GAMES":
            return {
                ...state,
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


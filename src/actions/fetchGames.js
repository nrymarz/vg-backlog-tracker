require('dotenv').config()
const url = `https://api.rawg.io/api/games?page_size=24&search=`
const api_key = `&key=${process.env.REACT_APP_API_KEY}`

const fetchGames = (params) => {
    return dispatch =>{
        dispatch({type: "START_ADDING_GAMES"})
        fetch(url + params.search + api_key)
            .then(res => res.json())
            .then(json=> dispatch({type: "ADD_GAMES",games: json.results}))
    }
}

const fetchMoreGames = () =>{
    return dispatch =>{
        dispatch({type: "LOADING_GAMES"})
        fetch(url + api_key)
            .then(res => res.json())
            .then(json=> dispatch({type: "ADD_MORE_GAMES", games: json.results}))
    }
}

export {fetchGames, fetchMoreGames}
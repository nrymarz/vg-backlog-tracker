require('dotenv').config()
const url = `https://api.rawg.io/api/games?page_size=24&search=`
const api_key = `&key=${process.env.REACT_APP_API_KEY}`

const fetchGenres = () =>{
    return dispatch =>{
        fetch('https://api.rawg.io/api/genres?'+ api_key)
            .then(res => res.json())
            .then(json => dispatch({type:"ADD_GENRES",genres: json.results}))
    }
}
const fetchGames = (params) => {
    return dispatch =>{
        dispatch({type: "START_ADDING_GAMES"})
        fetch(url + params.search + api_key)
            .then(res => res.json())
            .then(json=> dispatch({type: "ADD_GAMES",games: json.results, next_page: json.next}))
    }
}

const fetchMoreGames = (next_page) =>{
    return dispatch =>{
        dispatch({type: "LOADING_GAMES"})
        fetch(next_page)
            .then(res => res.json())
            .then(json=> dispatch({type: "ADD_MORE_GAMES", games: json.results, next_page: json.next}))
    }
}

export {fetchGames, fetchMoreGames,fetchGenres}
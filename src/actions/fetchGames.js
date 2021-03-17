require('dotenv').config()
const url = `https://api.rawg.io/api/games?page_size=24&search=`
const api_key = `&key=${process.env.REACT_APP_API_KEY}`

const fetchPlatforms = () =>{
    return dispatch =>{
        fetch('https://api.rawg.io/api/platforms?' + api_key)
            .then(res => res.json())
            .then(json => dispatch({type:"ADD_PLATFORMS", platforms: json.results}))
    }
}

const fetchGenres = () =>{
    return dispatch =>{
        fetch('https://api.rawg.io/api/genres?'+ api_key)
            .then(res => res.json())
            .then(json => dispatch({type:"ADD_GENRES",genres: json.results}))
    }
}
const fetchGames = (params) => {
    let newUrl = url + params.search
    if(parseInt(params.platform) > 0) newUrl = newUrl.concat(`&platforms=${params.platform}`)
    if(parseInt(params.genre) > 0) newUrl = newUrl.concat(`&genres=${params.genre}`)
    return dispatch =>{
        dispatch({type: "START_ADDING_GAMES"})
        fetch(newUrl + api_key)
            .then(res => res.json())
            .then(json=> dispatch({type: "ADD_GAMES",games: json.results, next_page: json.next}))
    }
}

const fetchMoreGames = (next_page) =>{
    return dispatch =>{
        fetch(next_page)
            .then(res => res.json())
            .then(json=> dispatch({type: "ADD_MORE_GAMES", games: json.results, next_page: json.next}))
    }
}

export {fetchGames, fetchMoreGames,fetchGenres, fetchPlatforms}
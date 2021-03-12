require('dotenv').config()
const url = "https://api.rawg.io/api/games?"
const api_key = `key=${process.env.REACT_APP_API_KEY}`

const fetchGames = (params) => {
    console.log(process.env)
    return dispatch =>{
        dispatch({type: "START_ADDING_GAMES"})
        fetch(url + api_key)
            .then(res => res.json())
            .then(json=> dispatch({type: "ADD_GAMES",games: json.results}))
    }
}

export default fetchGames
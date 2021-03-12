const url = "https://api.rawg.io/api/games?"
const api_key= "key=f237eb9ceb814510b6a1c0f1fa2b5506"

const fetchGames = (params) => {
    return dispatch =>{
        dispatch({type: "START_ADDING_GAMES"})
        fetch(url + api_key)
            .then(res => res.json())
            .then(json=> dispatch({type: "ADD_GAMES",games: json.results}))
    }
}

export default fetchGames
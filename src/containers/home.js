import React, {Component} from 'react'
import SearchForm from '../components/form'
import VideoGamesList from './videoGameList'
import fetchGames from '../actions/fetchGames'
import {connect} from 'react-redux'

class Home extends Component {
    render(){
        return(
            <>
                <h1>Search for Video Games</h1>
                <SearchForm fetchGames={this.props.fetchGames}/>
                <VideoGamesList games={this.props.games} loading={this.props.loading} hasSearched={this.props.hasSearched}/>
            </>
        )
    }
}

const mSTP = state =>{
    return{
        games: state.games,
        loading: state.loading,
        hasSearched: state.hasSearched
    }
}

const mDTP = dispatch =>{
    return {
        fetchGames: (params)=>dispatch(fetchGames(params))
    }
}

export default connect(mSTP,mDTP)(Home)
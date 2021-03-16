import React, {Component} from 'react'
import SearchForm from '../components/form'
//import VideoGamesList from './videoGameList'
import {fetchGames, fetchMoreGames} from '../actions/fetchGames'
import {connect} from 'react-redux'
import VideoGames from '../components/videoGames'
import InfiniteScroll from 'react-infinite-scroll-component'

class Home extends Component {
    render(){
        return(
            <>
                <h1>Search for Video Games</h1>
                <SearchForm fetchGames={this.props.fetchGames}/>
                <InfiniteScroll
                    dataLength={this.props.games.length}
                    next={this.props.fetchMoreGames}
                    hasMore={true}
                    loader={<h4>Loading...</h4>}
                >
                    <VideoGames games={this.props.games} loading={this.props.loading} hasSearched={this.props.hasSearched}/>
                </InfiniteScroll>
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
        fetchGames: (params)=>dispatch(fetchGames(params)),
        fetchMoreGames: () =>dispatch(fetchMoreGames)
    }
}

export default connect(mSTP,mDTP)(Home)
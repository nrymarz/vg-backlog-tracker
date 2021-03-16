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
                    next={() => this.props.fetchMoreGames(this.props.next_page)}
                    hasMore={this.props.next_page}
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
        hasSearched: state.hasSearched,
        next_page: state.next_page
    }
}

const mDTP = dispatch =>{
    return {
        fetchGames: (params)=> dispatch(fetchGames(params)),
        fetchMoreGames: (next_page) => dispatch(fetchMoreGames(next_page))
    }
}

export default connect(mSTP,mDTP)(Home)
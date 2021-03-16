import React, {Component} from 'react'
import SearchForm from '../components/form'
//import VideoGamesList from './videoGameList'
import {fetchGames, fetchMoreGames} from '../actions/fetchGames'
import {connect} from 'react-redux'
import VideoGames from '../components/videoGames'
import InfiniteScroll from 'react-infinite-scroll-component'

class Home extends Component {
    componentDidMount(){
        this.props.fetchGames({search: ''})
    }

    render(){
        return(
            <>
                <SearchForm fetchGames={this.props.fetchGames}/>
                <InfiniteScroll
                    dataLength={this.props.games.length}
                    next={() => this.props.fetchMoreGames(this.props.next_page)}
                    hasMore={this.props.next_page}
                    >
                    <VideoGames games={this.props.games} loading={this.props.loading}/>
                </InfiniteScroll>
            </>
        )
    }
}

const mSTP = state =>{
    return{
        games: state.games,
        loading: state.loading,
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
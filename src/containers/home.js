import React, {Component} from 'react'
import SearchForm from '../components/form'
import {fetchGames, fetchMoreGames, fetchGenres} from '../actions/fetchGames'
import {connect} from 'react-redux'
import VideoGames from '../components/videoGames'
import InfiniteScroll from 'react-infinite-scroll-component'

class Home extends Component {
    componentDidMount(){
        this.props.fetchGames({search: ''})
        this.props.fetchGenres()
    }

    render(){
        return(
            <>
                <SearchForm fetchGames={this.props.fetchGames} genres={this.props.genres}/>
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
        genres: state.genres,
        games: state.games,
        loading: state.loading,
        next_page: state.next_page
    }
}

const mDTP = dispatch =>{
    return {
        fetchGames: (params)=> dispatch(fetchGames(params)),
        fetchMoreGames: (next_page) => dispatch(fetchMoreGames(next_page)),
        fetchGenres: () => dispatch(fetchGenres())
    }
}

export default connect(mSTP,mDTP)(Home)
import React, {Component} from 'react'
import VideoGames from '../components/videoGames'
import InfiniteScroll from 'react-infinite-scroll-component'

class VideoGameList extends Component {
    fetchMoreGames = () =>{
        this.setState({
            games: this.state.games.concat(this.props.fetchGames({search: ''}))
        })
    }
    render(){
        debugger
        return(
            <InfiniteScroll
                dataLength={this.state.games.length}
                next={this.fetchMoreGames}
                hasMore={true}
                loader={<h4>Loading...</h4>}
            >
                <VideoGames games={this.state.games} loading={this.props.loading} hasSearched={this.props.hasSearched}/>
            </InfiniteScroll>
        )
    }

}

export default VideoGameList
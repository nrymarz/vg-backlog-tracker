import React, {Component} from 'react'
import VideoGames from '../components/videoGames'

class VideoGameList extends Component {
    render(){
        return(
            <VideoGames games={this.props.games} loading={this.props.loading} hasSearched={this.props.hasSearched}/>
        )
    }

}

export default VideoGameList
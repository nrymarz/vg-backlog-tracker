import React, {Component} from 'react'
import Form from '../components/form'
import VideoGamesList from './videoGameList'
import fetchGames from '../actions/fetchGames'
import {connect} from 'react-redux'

class Home extends Component {
    render(){
        return(
            <>
                <Form fetchGames={this.props.fetchGames}/>
                <VideoGamesList/>
            </>
        )
    }
}

const mSTP = state =>{
    return{
        games: state.games
    }
}

const mDTP = dispatch =>{
    return {
        fetchGames: ()=>dispatch(fetchGames())
    }
}

export default connect(mSTP,mDTP)(Home)
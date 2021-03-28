import React,{Component} from 'react'
import Home from './containers/home'
import Backlog from './containers/backlog'
import Login from './containers/login'
import {addUser,addToBacklog,clearBacklog,loadGamesFromUser} from './actions/backlogActions'
import {connect} from 'react-redux'
import VGNavBar from './components/VGNavBar'
import {BrowserRouter as Router, Route,Redirect} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

class App extends Component {
  componentDidMount(){
    if(localStorage.getItem('jwt')){
      const configObj={
        method:"POST",
        headers:{
          'Content-Type':'application/json',
          'Authorization':`Bearer ${localStorage.getItem('jwt')}`
        }
      }
     fetch('http://localhost:3000/profile',configObj)
      .then(res => res.json())
      .then(json =>{
        this.props.addUser(json.user)
        const backlog = JSON.parse(json.backlog)
        if(backlog) this.props.loadGamesFromUser(backlog)
      })
    }
  }

  isLoggedIn = () =>{
    return this.props.user.length > 0
  }

  logout = () =>{
    localStorage.clear()
    this.props.addUser('')
    this.props.clearBacklog()
    return <Redirect to='/'/>
  }
  
  render(){
    return(
      <Router>
        <div className="App">
          <VGNavBar user={this.props.user}/>
          <Route exact path='/' render={() => <Home isLoggedIn={this.isLoggedIn}/>} />
          <Route exact path='/backlog' render={()=> <Backlog isLoggedIn={this.isLoggedIn} />} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/logout' render={this.logout} />
        </div>
      </Router>
    )
  }
}

const mSTP = state =>{
  return{
    user: state.user
  }
}

const mDTP = dispatch =>{
  return{
    addUser: user => dispatch(addUser(user)),
    addToBacklog: game => dispatch(addToBacklog(game)),
    clearBacklog: () => dispatch(clearBacklog()),
    loadGamesFromUser: games => dispatch(loadGamesFromUser(games))
  }
}

export default connect(mSTP,mDTP)(App)

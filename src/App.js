import Home from './containers/home'
import Backlog from './containers/backlog'
import VGNavBar from './components/VGNavBar'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <VGNavBar/>
        <Route exact path='/' component={Home} />
        <Route exact path='/backlog' component={Backlog} />
      </div>
    </Router>
  );
}

export default App;

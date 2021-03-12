import React, {Component} from 'react'
import Form from '../components/form'
import {connect} from 'react-redux'

class Home extends Component {
    render(){
        return(
            <div>
                <Form/>
            </div>
        )
    }
}

export default connect()(Home)
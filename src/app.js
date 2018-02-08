import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators }  from 'redux'
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom'
import { Button } from 'antd'

import routes from './routes'
import * as actions from './actions'
import csIpc from './common/ipc/ipc_cs'
import Header from './components/header'
import Sidebar from './containers/sidebar'
import DashboardPage from './containers/dashboard'
import Auth from './containers/auth'
import Main from './containers/main'
import 'antd/dist/antd.css'
import './app.scss'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {isLoggedIn: false};
  }

  loginCallback = () => {
    this.setState({isLoggedIn: true})
  }

  render () {
    if (!this.state.isLoggedIn) {
      return (
        <Auth loginCallback={this.loginCallback}/>
      )
    } else {
      return (
        <Main />
      )
    }
  }
}

export default connect(
  state => ({}),
  dispatch => bindActionCreators({...actions}, dispatch)
)(App)

import React, { Component } from 'react'
import { HashHistory as Router, Route, Link, Switch, Redirect } from 'react-router-dom'

import routes from '../../routes'
import Header from '../../components/header'
import Sidebar from '../../components/sidebar'
import Dashboard from '../dashboard'
import 'antd/dist/antd.css'
import '../../app.scss'

class Main extends Component {
  render () {
    return (
      <div className="main">
        <Sidebar />
        <section className="content">
          <Header />
          <Dashboard />
        </section>
      </div>
    );
  }
}

export default Main;

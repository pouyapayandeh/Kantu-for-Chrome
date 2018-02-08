import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators }  from 'redux'
import { Link, Route, Switch, Redirect, withRouter } from 'react-router-dom'
import routes from '../../routes'


import * as actions from '../../actions'

class Auth extends React.Component {

	onClickLogin = () => {
		this.props.loginCallback()
	}

	render () {
		return (
			
			<div className="auth">
				Username: <input type="text" className="auth-input" id="username"/>
				<br />
				Password: <input type="password" className="auth-input" id="password"/>
				<br />

				<button className="signin"  onClick={this.onClickLogin}>
					Login
				</button>
			
			</div>
		)
	}
}

export default connect(
	state => ({}),
	dispatch => bindActionCreators({...actions}, dispatch)
)(Auth)


import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators }  from 'redux'
import { Link } from 'react-router-dom';


import * as actions from '../../actions'

class Auth extends React.Component {
	onClickLogin = () => {
		this.props.history.push('/main');
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

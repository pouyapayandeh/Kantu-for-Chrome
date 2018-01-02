import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators }  from 'redux'
import { Link } from 'react-router-dom';


import * as actions from '../../actions'

class PartitionPage extends React.Component {
	render () {
		return (
            <div>salam</div>
		)
	}
}

export default connect(
	state => ({}),
	dispatch => bindActionCreators({...actions}, dispatch)
)(PartitionPage)

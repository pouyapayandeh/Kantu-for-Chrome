import React from 'react'

import {
	Button, Dropdown, Menu, Input, Icon, Table, Checkbox,
	Form, Select, Modal, message, Row, Col, Tabs, Popconfirm , Card
  } from 'antd'


class Result extends React.Component {
	render () {
		return (
		<div >
			<div  style={{textAlign:"center"}}>
				<h1 > Result : </h1>
			</div>
			
			<Row >
				<Col span={8} offset={8}>
					<Card title="Number Of Inputs" > <b>100</b></Card>
				</Col>
			</Row>
			<br></br>
			<Row >
				<Col span={8} offset={8}>
					<Card title="Number Of Partitions" > <b>1000</b></Card>
				</Col>
			</Row>
			<br></br>
			<Row >
				<Col span={8} offset={8}>
					<Card title="Test Coverage">
					<Select defaultValue="All-Choice" size="large" >
						<Option value="All-Choice">All Choice</Option>
						<Option value="Best-Choice">Best Choice</Option>
						<Option value="Combined-Choice" >Combined Choice</Option>
					</Select>
					</Card>
				</Col>
			</Row>
			<br></br>
			<Row >
				<Col span={8} offset={8}>
					<Card title="Computation Cost" > <b>1000</b></Card>
				</Col>
			</Row>
		</div>

		)
	}
}

export default Result;

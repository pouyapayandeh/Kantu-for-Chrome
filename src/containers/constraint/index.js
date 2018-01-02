import React from 'react'

import {
	Button, Dropdown, Menu, Input, Icon, Table, Checkbox,
	Form, Select, Modal, message, Row, Col, Tabs, Popconfirm , Card 
  } from 'antd'
const InputGroup = Input.Group;
const { Column, ColumnGroup } = Table;
const Option = Select.Option
class Constraint extends React.Component {
	data = [{
		key: '1',
		input_1:'logintxt',
		part_1:'2',
		rule:"Must",
		input_2:'passtxt',
		part_2:'3',
	  }, {
		key: '2',
		input_1:'logintxt',
		part_1:'2',
		rule:"Must",
		input_2:'passtxt',
		part_2:'3',
	  }, {
		key: '3',
		input_1:'logintxt',
		part_1:'2',
		rule:"Should not",
		input_2:'passtxt',
		part_2:'3',
	  }];
	render () {
		return (
			<div style={{padding : 50}}>
			{/* <InputGroup compact> */}
					From
					<Select defaultValue="All-Choice" size="large" style={{width:200 , padding : 20}}>
						<Option value="All-Choice">All Choice</Option>
						<Option value="Best-Choice">Best Choice</Option>
						<Option value="Combined-Choice" >Combined Choice</Option>
					</Select>
					Partition
					<Select defaultValue="All-Choice" size="large" style={{width:200 , padding : 20}}>
						<Option value="All-Choice">All Choice</Option>
						<Option value="Best-Choice">Best Choice</Option>
						<Option value="Combined-Choice" >Combined Choice</Option>
					</Select>
					Must
					<Select defaultValue="must" size="large" style={{padding : 20}}>
						<Option value="must">Come</Option>
						<Option value="must-not">Not Come</Option>
					</Select>

					With
					<Select defaultValue="All-Choice" size="large" style={{width:200 , padding : 20}}>
						<Option value="All-Choice">All Choice</Option>
						<Option value="Best-Choice">Best Choice</Option>
						<Option value="Combined-Choice" >Combined Choice</Option>
					</Select>
					Partition
					<Select defaultValue="All-Choice" size="large" style={{width:200 , padding : 20}}>
						<Option value="All-Choice">All Choice</Option>
						<Option value="Best-Choice">Best Choice</Option>
						<Option value="Combined-Choice" >Combined Choice</Option>
					</Select>

				<Button type="primary">Add</Button>
				{/* </InputGroup > */}
				

				<Table dataSource={this.data}>
					<Column
						title="Input"
						dataIndex="input_1"
						key="input_1"
					/>
					<Column
						title="Partition"
						dataIndex="part_1"
						key="part_1"
					/>
					<Column
					title="Rule"
					dataIndex="rule"
					key="rule"
					/>
					<Column
						title="Input"
						dataIndex="input_2"
						key="input_2"
					/>
					<Column
						title="Partition"
						dataIndex="part_2"
						key="part_2"
					/>
					<Column
					title="Action"
					key="action"
					render={(text, record) => (
						<span>
						<a href="#">Action 一 {record.name}</a>
						<span className="ant-divider" />
						<a href="#">Delete</a>
						<span className="ant-divider" />
						<a href="#" className="ant-dropdown-link">
							More actions <Icon type="down" />
						</a>
						</span>
					)}
					/>
				</Table>
			</div>

		)
	}
}

export default Constraint;

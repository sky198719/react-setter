import React,{Component} from 'react'
import {inject,observer} from 'mobx-react'
import List from './mods/list/index.jsx'
@inject('store')
@observer

export default class Home extends Component{
	constructor(props){
		super(props)
		this.state = {
			showList:'block',
			list:[
				{title:1,name:'aaa'},
				{title:2,name:'bbb'},
				{title:3,name:'ccc'}
			]
		}
	}
	showStatus(e){
		console.log(e.currentTarget.getAttribute('data-status'))
	}
	statusChange(){
		let temp  = 'block'
		temp = this.state.showList == 'block' ? 'none' : 'block'
		this.setState({
			showList:temp
		})
	}
	listChange(){
		const _this = this
		setTimeout(() => {
			_this.setState({
				list:[
					{title:4,name:'ddd'},
					{title:5,name:'eee'}
				]
			})
		},2000)
	}
	render(){
		return(
			<div>
				<button onClick={() => this.props.store.titleChange(12321)}>122333333</button>
				<button onClick={() => this.statusChange()}>{this.props.store.title}</button>
				<List showList={this.state.showList} list={this.state.list} showStatus={(e) => this.showStatus(e)} />
			</div>
		)
	}
	componentDidMount(){
		this.listChange()
	}
}
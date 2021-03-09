import React,{Component} from 'react'
import './index.scss'

export default class List extends Component{
	render(){
		return(
			<ul style={{display:this.props.showList}} class="myList">
				{
					this.props.list.map((item,index) => {
						return <li data-status={item.title} onClick={(e) => this.props.showStatus(e)}>{item.name}</li>
					})
				}
			</ul>
		)
	}
}
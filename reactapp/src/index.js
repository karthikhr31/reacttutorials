import React from 'react'
import ReactDom from 'react-dom'

function Message(props){
	if(props.value){
		return <h1>I am First message</h1>
	}
		return <h1>This is second message</h1>
}	

class Btn extends React.Component{
	constructor(props){
		super(props);
		this.state = {value : true}
	}
	handleClick = () =>{
		this.setState({
			value : !this.state.value
		})
	}
	render(){
		return(
			<div>
		 <button onClick = {this.handleClick}>change</button>
		 <Message value={this.state.value}></Message>
		 </div>
			)
	}
}




ReactDom.render(
<Btn/>,
document.getElementById('root')
)
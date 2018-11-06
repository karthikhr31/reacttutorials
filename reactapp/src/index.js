import React from 'react'
import ReactDOM from 'react-dom'

class Test extends React.Component{
	constructor(props){
		super(props)
		this.state = {value :'',checkvalue :'false'}

	}

valueSubmit=(e)=>{
	console.log(this.state.value)
	e.preventDefault()
}

valueChange=(e)=>{
this.setState({
	value : e.target.value,
	checkvalue : !this.state.checkvalue
})
}


	render(){
		return (
<form onSubmit={this.valueSubmit}>
<input type='text' value={this.state.value} onChange={this.valueChange}/>
<input type='checkbox' value={this.state.checkvalue} onChange={this.valueChange}/>
<input type='submit' value= 'change'/>
</form>

			)
	}
}
ReactDOM.render(
<Test/>,
document.getElementById('root')
	)
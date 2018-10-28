import React from 'react'
import ReactDOM from 'react-dom'

function People(props){
	return <h1>hello {props.name}{props.show}</h1>
}
// class People extends React.Component{
// 	render(){
// 		return <h1>hello {this.props.name}</h1>
// 	}
// }
function Show(){
	return <div>
		<People name='Sagar' show='Ramesh'/>
		<People name='Venkatesh' show=''/>
	</div>
}
ReactDOM.render(
<Show/>,
document.getElementById('root')
	);

import React from 'react'
import ReactDOM from 'react-dom'

function GetIndividuals(props){
	const namearray=props.nameValue
	return <ul>{
namearray.map((namearray,index)=><li key={index}>{namearray}</li>)
	}</ul>
}
const list =  ['karthik','chethu','muthu','varun']

ReactDOM.render(
<GetIndividuals nameValue = {list}/>,
document.getElementById('root')
	)
import { useState } from 'react';
import './App.css';

function App() {
	return (
		<div className = "App">
			<District name="Comilla" special="Sharban Bihar and Moynamoti"></District>
			<District name="Dhaka" special="National Zoo"></District>
			<District name="Bogura" special="Doi"></District>
		</div>
	);
}

const districtStyle = {
	backgroundColor: "yellow",
	margin: "15px",
	padding: "10px",
	borderRadius : "15px",

}

const District = (props) => {

	const [power, setPower] = useState(1);
	const boostPower = () => {
		const NewPower = power * 2;
		setPower(NewPower);
	}
	return (
		<div className='district' style={districtStyle}>
			<h2>Name : { props.name }</h2>
			<p>Specialty : {props.special}</p>
			<h5>Power : {power}</h5>
			<button onClick={boostPower}>Boost The Power</button>
		</div>
	)
}



export default App;
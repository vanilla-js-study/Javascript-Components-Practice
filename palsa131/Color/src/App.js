import Button from "./Button.js"
export default function App({targetEl}){
	const button = new Button({
		targetEl,
		initialState:{
			value: 'Change!!'
		},
		onClick: ()=>{
			makeRandomBgColor(targetEl)
		},
	})
}

function makeRandomBgColor(targetEl){
	const bgColor = Array(3).fill(0).map(()=>Math.floor(Math.random() * 255)).join(',')
	targetEl.style.backgroundColor = `rgb(${bgColor})`
}
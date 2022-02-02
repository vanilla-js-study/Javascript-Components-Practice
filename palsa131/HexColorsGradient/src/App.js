import Button from "./Button.js"
export default function App({targetEl}){

	const button = new Button({
		targetEl,
		initialState:{
			value: 'Change!!'
		},
		onClick: ()=>{
			const linearGradient = Array(2).fill(0).map(()=> Array(3).fill(0).map(()=>Math.floor(Math.random() * 256).toString(16)).join(''))
			targetEl.style.background = `linear-gradient(to right,#${linearGradient[0]},#${linearGradient[1]})`;
		},
	})
}


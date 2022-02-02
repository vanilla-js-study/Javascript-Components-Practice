import Button from "./Button.js"
export default function App({targetEl}){
	
	this.state ={
		linearGradient: ['#ffffff','#ffffff'],
	};

	this.setLinearGradient = (nextState)=>{
		this.state.linearGradient = nextState;
		this.render();
	}

	const guideTextEl = document.createElement('h1');
	const backgroundInfoTextEl = document.createElement('h2');

	this.render = ()=>{
		guideTextEl.textContent = 'CLICK THE BUTTON BELLOW TO GENERATE A RANDOM GRADIENT HEX COLOR COMBINATION'
		backgroundInfoTextEl.textContent = `background: linear-gradient(to right, ${this.state.linearGradient[0]}, ${this.state.linearGradient[1]});`
		
		targetEl.appendChild(guideTextEl);
		targetEl.appendChild(backgroundInfoTextEl);
	}

	const button = new Button({
		targetEl,
		initialState:{
			value: 'Change!!'
		},
		onClick: ()=>{
			const linearGradient = Array(2).fill(0).map(()=> Array(3).fill(0).map(()=>Math.floor(Math.random() * 256).toString(16)).join(''))
			targetEl.style.background = `linear-gradient(to right,#${linearGradient[0]},#${linearGradient[1]})`;
			this.setLinearGradient(linearGradient);
		},
	})

	this.render();
}

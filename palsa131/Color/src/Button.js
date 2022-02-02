export default function Button({targetEl, initialState, onClick}){
	const elButton = document.createElement('button')

	this.state = initialState

	this.setState = (nextState)=>{
		this.state = nextState
		this.render()
	}

	elButton.textContent = this.state.value

	elButton.addEventListener('click',onClick)

	this.render = ()=>{}

	targetEl.appendChild(elButton)
}
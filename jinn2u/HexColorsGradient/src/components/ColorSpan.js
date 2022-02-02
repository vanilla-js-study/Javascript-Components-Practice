import { isCalledWithNew } from '../utils';

function ColorSpan({ $target, initialState }) {
  isCalledWithNew($target);

  this.$target = $target;
  this.state = {
    color: initialState,
  };

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };
  this.render = () => {
    this.$target.innerHTML = this.state.color;
  };

  this.render();
}
export default ColorSpan;

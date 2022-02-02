import { isCalledWithNew } from '../utils';

function Heading({ $target, text }) {
  isCalledWithNew(new.target);

  this.$target = $target;

  this.$heading = document.createElement('h1');
  this.$target.appendChild(this.$heading);

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    this.$heading.innerHTML = text;
  };
  this.render();
}
export default Heading;

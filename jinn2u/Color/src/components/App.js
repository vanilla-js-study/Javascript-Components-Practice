import '../styles/index.scss';
import { isCalledWithNew } from '../utils';
import Button from './Button';

function App({ $target }) {
  this.$target = null;
  this.state = {
    colors: { r: 0, g: 0, b: 0 },
  };
  this._setState = (nextState) => {
    this.state = nextState;
    this._render();
  };

  isCalledWithNew(new.target);
  this.$target = $target;

  (() =>
    new Button({
      $target,
      text: 'click me!',
      onBtnClick: () => {
        const createRandomRgb = () => Math.round(Math.random() * 255);
        const r = createRandomRgb();
        const g = createRandomRgb();
        const b = createRandomRgb();
        this._setState({ ...this.state, colors: { r, g, b } });
      },
    }))();

  this._render = () => {
    const { r, g, b } = this.state.colors;
    this.$target.style.backgroundColor = `rgba(${r},${g},${b})`;
  };
}
export default App;

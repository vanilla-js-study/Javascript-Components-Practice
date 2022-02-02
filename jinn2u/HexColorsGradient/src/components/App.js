import { isCalledWithNew } from '../utils';
import Button from './Button';
import Heading from './Heading';
import '../styles/index.scss';
import ColorSpan from './ColorSpan';

function App({ $target }) {
  isCalledWithNew(new.target);

  this.$target = $target;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  (() =>
    new Heading({
      $target,
      text: 'CLICK THE BUTTON BELLOW TO GENERATE A RANDOM GRADIENT HEX COLOR COMBINATION',
    }))();
  (() =>
    new Heading({
      $target,
      text: 'background: linear-gradient(to right, <span id="hexcode1"></span>, <span id="hexcode2"></span>);',
    }))();
  const $colorSpan1 = new ColorSpan({
    $target: document.querySelector('#hexcode1'),
    initialState: '#ffffff',
  });
  const $colorSpan2 = new ColorSpan({
    $target: document.querySelector('#hexcode2'),
    initialState: '#ffffff',
  });
  (() =>
    new Button({
      $target,
      text: 'Click Me',
      handleBtnClick: (color1, color2) => {
        this.setState({ ...this.state, colors: [color1, color2] });
        $colorSpan1.setState({ ...$colorSpan1.state, color: color1 });
        $colorSpan2.setState({ ...$colorSpan2.state, color: color2 });
      },
    }))();

  this.render = () => {
    document.body.style.background = `linear-gradient(to right, ${this.state.colors[0]}, ${this.state.colors[1]})`;
  };
  this.render();
}
export default App;

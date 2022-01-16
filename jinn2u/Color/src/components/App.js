import '../styles/index.scss';
import { isCalledWithNew } from '../utils';
import Button from './Button';

function App({ $target }) {
  this.$target = null;
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
        this.$target.style.backgroundColor = `rgba(${r},${g},${b})`;
      },
    }))();
}
export default App;

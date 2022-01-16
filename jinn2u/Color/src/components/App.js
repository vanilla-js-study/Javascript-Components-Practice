import '../styles/index.scss';
import { isCalledWithNew } from '../utils';
import Button from './Button';

function App({ $target }) {
  isCalledWithNew(new.target);
  (() => new Button({ $target, text: 'click me!' }))();
}
export default App;

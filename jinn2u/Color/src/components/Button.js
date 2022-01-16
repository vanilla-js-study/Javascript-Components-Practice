import { isCalledWithNew } from '../utils';

function Button({ $target, text }) {
  isCalledWithNew(new.target);
  const $button = document.createElement('button');
  $button.setAttribute('type', 'button');
  $target.appendChild($button);

  this.render = () => {
    this._verifyText();
    $button.innerText = text;
  };
  this._verifyText = () => {
    if (typeof text !== 'string') {
      return console.warn(`버튼안의 ${text}는 문자여야 합니다.`);
    }
    return true;
  };

  this.render();
}
export default Button;

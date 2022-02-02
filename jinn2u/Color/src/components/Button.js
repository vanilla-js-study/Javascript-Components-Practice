import { isCalledWithNew } from '../utils';

function Button({ $target, text, onBtnClick }) {
  this.$target = null;
  this.text = null;
  this.onBtnClick = null;

  isCalledWithNew(new.target);
  this.$target = $target;
  this.text = text;
  this.onBtnClick = onBtnClick;

  const $button = document.createElement('button');
  $button.setAttribute('type', 'button');
  $target.appendChild($button);

  this.render = () => {
    this._verifyParams();
    $button.innerText = this.text;
  };

  this._verifyParams = () => {
    if (typeof this.text !== 'string') {
      return console.warn(`버튼안의 ${text}는 문자여야 합니다.`);
    }
    if (typeof this.onBtnClick !== 'function') {
      return console.warn('onBtnClick은 함수여야 합니다.');
    }
    return true;
  };
  $button.addEventListener('click', () => {
    const randomHexColor = () => `#${Math.round(Math.random()*0xFFFFFF).toString(16)}`
    this.onBtnClick(randomHexColor(), randomHexColor())
    
  });
  this.render();
}
export default Button;

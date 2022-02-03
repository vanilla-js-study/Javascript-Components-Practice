import { isCalledWithNew } from '../utils';

function Button({ $target, text, handleBtnClick }) {
  isCalledWithNew(new.target);
  this.$target = $target;
  this.handleBtnClick = handleBtnClick;

  this.$button = document.createElement('button');
  this.$target.appendChild(this.$button);

  this.render = () => {
    this.$button.textContent = text;
    this.$button.addEventListener('click', () => {
      const randomHexColor = () => `#${Math.round(Math.random() * 0xffffff).toString(16)}`;
      this.handleBtnClick(randomHexColor(), randomHexColor());
    });
  };
  this.render();
}
export default Button;

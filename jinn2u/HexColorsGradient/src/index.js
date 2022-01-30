import App from './components/App.js';

const NO_ENTER_POINT = '진입점이 존재하지 않습니다!';
const $app = document.querySelector('#app');

if (!$app) {
  throw Error(NO_ENTER_POINT);
}
(() => new App({ $target: $app }))();

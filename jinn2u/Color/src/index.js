import App from './components/App.js';

const $app = document.querySelector('#app');

if (!$app) {
  throw Error('진입점이 존재하지 않습니다!');
}
(() => new App({ $app }))();

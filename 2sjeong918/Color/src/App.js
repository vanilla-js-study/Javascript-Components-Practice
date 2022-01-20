import Button from "./Button.js";
export default function App({ $target }) {
  const $container = document.createElement("div");
  const $buttonWrapper = document.createElement("div");

  $container.className = "container";

  $target.appendChild($container);
  $container.appendChild($buttonWrapper);

  this.state = {
    r: 0,
    g: 0,
    b: 0,
  };

  const colorChange = () => {
    const nextR = Math.floor(Math.random() * 256);
    const nextG = Math.floor(Math.random() * 256);
    const nextB = Math.floor(Math.random() * 256);
    this.setState({
      ...this.state,
      r: nextR,
      g: nextG,
      b: nextB,
    });
  };

  new Button({
    $target: $buttonWrapper,
    onClick: colorChange,
  });

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    const { r } = this.state;
    const { g } = this.state;
    const { b } = this.state;
    $container.style.backgroundColor = `rgb(${r},${g},${b})`;
  };

  this.render();
}

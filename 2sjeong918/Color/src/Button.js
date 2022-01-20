export default function Button({ $target, onClick }) {
  const $button = document.createElement("button");

  $button.className = "change-color-btn";
  $button.innerText = "Click!";

  $target.appendChild($button);

  $button.addEventListener("click", (e) => {
    e.preventDefault();
    onClick();
  });
}

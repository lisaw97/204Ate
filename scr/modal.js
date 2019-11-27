export default class Modal {
  constructor() {
    this.container = document.createElement("div");
    this.container.id = "modal";
    this.render();
  }

  render() {
    let content = document.createElement("div");
    content.id = "modal-content";
    this.container.appendChild(content);

    let text = document.createElement("h3");
    text.innerText = 'Game Over';
    content.appendChild(text);

    let reset = document.createElement('button');
    reset.id = "modal-reset";
    reset.innerText = "Try Again";
    content.appendChild(reset);
  }
}
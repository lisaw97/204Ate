export default class Scores {
  constructor() {
    this.container = document.getElementById("scores");
    // this.container = document.createElement("div");
    // this.container.id = "scores";
    this.render();
  }

  render() {
    let node = document.createElement("h3");
    node.id = "currentScore";
    let textnode = document.createTextNode("Score: 0");
    node.appendChild(textnode);
    this.container.appendChild(node);
  }
}

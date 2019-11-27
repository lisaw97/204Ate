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
    this.container.appendChild(node);
  }
}

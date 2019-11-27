export default class Instructions {

  constructor() {
    this.container = document.createElement("div");
    this.container.id = "instructions";
    this.render();
  }

  render() {
    let node = document.createElement("p");
    let textnode = document.createTextNode(
      "HOW TO PLAY: Use your arrow keys to move the tiles. When two tiles with the same number touch, they merge into one! ABOUT THIS GAME: This game is is a single player sliding block game inspired by the game 2048 and the song There was an old lady... The objective of the game is to slide blocks on grid and combine them till they form an old lady. The blocks start out as flies, then spiders, bird, cat, dog, and so on, until it becomes a lady. 🦟 ,🕷, 🐧, 😸, 🐶, 🐮, 🐴, 🤰🏻"
    );
    node.appendChild(textnode);
    this.container.appendChild(node);
  }

}
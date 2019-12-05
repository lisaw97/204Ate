export default class Instructions {

  constructor() {
    this.container = document.createElement("div");
    this.container.id = "instructions";
    this.render();
  }

  render() {
    let title1 = document.createElement("p");
    title1.id = "title";
    let titleText1 = document.createTextNode(
      "HOW TO PLAY: "
    );
    
    let body1 = document.createElement("p");
    body1.id = "body";
    let bodyText1 = document.createTextNode(
      "Use your arrow keys to move the tiles. When two tiles with the same icons touch, they merge into one! Once the blocks combine to form an old lady, you win! The blocks merge in this order: 🦟 ,🕷, 🐧, 😸, 🐶, 🐮, 🐴, 🤰🏻"
    )

    let title2 = document.createElement("p");
    title2.id = "title";
    let titleText2 = document.createTextNode(
      "ABOUT THIS GAME: "
    )

    let body2 = document.createElement("p");
    body2.id = "body";
    let bodyText2 = document.createTextNode(
      "This game is is a single player sliding block game inspired by the game 2048 and the song There was an old lady... The objective of the game is to slide blocks on grid and combine them till they form an old lady. The blocks start out as flies, then spiders, bird, cat, dog, and so on, until it becomes a lady. 🦟 ,🕷, 🐧, 😸, 🐶, 🐮, 🐴, 🤰🏻"
    )

    title1.appendChild(titleText1);
    body1.appendChild(bodyText1);
    title2.appendChild(titleText2);
    body2.appendChild(bodyText2);
    this.container.appendChild(title1);
    this.container.appendChild(body1);
    this.container.appendChild(title2);
    this.container.appendChild(body2);
  }

}
# 204Ate

[Live Demo](https://lisaw97.github.io/204Ate/)

This game is is a single player sliding block game inspired by the game "2048" and the song "There Was an Old Lady Who Swallowed a Fly". The objective of the game is to slide blocks on grid and combine them till they form an old lady. The blocks follow the song and start out as flies, then spiders, bird, cat, dog, and so on, until it becomes a lady.

![Game](/scr/media/game.gif)

## Architecture and Technologies

**HTML, CSS, Javascript, CanvasJS**

This game utilizes `JavaScript` for its game logic and `HTML`, `CSS` and `CanvasJS` for purposes of rendering.

## Features

Player utilizes **arrow keys** on the keyboard to slide blocks in different directions.

```javascript
document.onkeydown = function(event) {
  switch (event.keyCode) {
    case 37:
      event.preventDefault();
      game.makeMove('left');
      break;
    case 38:
      event.preventDefault();
      game.makeMove('up');
      break;
    case 39:
      event.preventDefault();
      game.makeMove('right');
      break;
    case 40:
      event.preventDefault();
      game.makeMove('down');
      break;
 }
};
```

**Modal** popup with option to play again when game is won/lost.

![Modal](/scr/media/win.png)

**Background video** with music is embedded and displayed in the background using CSS

```css
#video {
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%; 
  min-height: 100%;
  opacity: 0.5;
  z-index: -2;
}
```

**Mute button** mutes video and changes icon displayed through an event listener that waits for a button click.

```javascript
const mute = document.getElementById("mute");
mute.addEventListener("click", () => {
  if (mute.className === "fas fa-volume-mute fa-2x") {
    document.getElementById("video").src =
      "https://www.youtube.com/embed/ApmEM9-xA2c?&autoplay=1&loop=1&modestbranding=1&autohide=1&showinfo=0&controls=0&mute=1&rel=0&showinfo=0&color=white&iv_load_policy=3&playlist=ApmEM9-xA2c";
    mute.className = "fas fa-volume-up fa-2x";
  } else {
    document.getElementById("video").src =
      "https://www.youtube.com/embed/ApmEM9-xA2c?&autoplay=1&loop=1&modestbranding=1&autohide=1&showinfo=0&controls=0&rel=0&showinfo=0&color=white&iv_load_policy=3&playlist=ApmEM9-xA2c";
    mute.className = "fas fa-volume-mute fa-2x";
}
})
```


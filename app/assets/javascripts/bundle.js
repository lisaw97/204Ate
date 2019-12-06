/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scr_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scr/game */ "./scr/game.js");
/* harmony import */ var _scr_instructions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scr/instructions */ "./scr/instructions.js");
/* harmony import */ var _scr_scores__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scr/scores */ "./scr/scores.js");
/* harmony import */ var _scr_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scr/modal */ "./scr/modal.js");



 // game

var app = document.getElementById("app"); // instructions 

var instructions = new _scr_instructions__WEBPACK_IMPORTED_MODULE_1__["default"]();
app.prepend(instructions.container);
var video = document.getElementById("video");
var mute = document.getElementById("mute");
mute.addEventListener("click", function () {
  if (video.paused) {
    video.paused();
    mute.innerHTML = "Mute";
  } else {
    video.pause();
    mute.innerHTML = "Sound";
  }
});
var canvas = document.getElementById("canvas");
var modal = new _scr_modal__WEBPACK_IMPORTED_MODULE_3__["default"]();
var game = new _scr_game__WEBPACK_IMPORTED_MODULE_0__["default"](canvas, modal); // scores

new _scr_scores__WEBPACK_IMPORTED_MODULE_2__["default"](); // new game button

var reset = document.getElementById("reset");
reset.addEventListener("click", function () {
  game = new _scr_game__WEBPACK_IMPORTED_MODULE_0__["default"](canvas);
}); // modal

app.appendChild(modal.container);
var modalReset = document.getElementById("modal-reset");
modalReset.addEventListener("click", function () {
  var modal = document.getElementById("modal");
  modal.style.display = 'none';
  game = new _scr_game__WEBPACK_IMPORTED_MODULE_0__["default"](canvas, modal);
}); // detect arrow key press

document.onkeydown = function (event) {
  switch (event.keyCode) {
    case 37:
      game.makeMove('left');
      break;

    case 38:
      game.makeMove('up');
      break;

    case 39:
      game.makeMove('right');
      break;

    case 40:
      game.makeMove('down');
      break;
  }
};

/***/ }),

/***/ "./scr/game.js":
/*!*********************!*\
  !*** ./scr/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Game; });
/* harmony import */ var _grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./grid */ "./scr/grid.js");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal */ "./scr/modal.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var Game =
/*#__PURE__*/
function () {
  function Game(canvas, modal) {
    _classCallCheck(this, Game);

    this.grid = new _grid__WEBPACK_IMPORTED_MODULE_0__["default"](canvas);
    this.grid.print();
    this.displayScore();
  }

  _createClass(Game, [{
    key: "makeMove",
    value: function makeMove(direction) {
      this.grid.makeMove(direction);
      this.grid.placeNewSymbol();
      this.grid.print();

      if (this.lost() || this.won()) {
        this.openModal();
      }

      this.displayScore();
    }
  }, {
    key: "displayScore",
    value: function displayScore() {
      var currentScore = document.getElementById("currentScore");
      if (currentScore) currentScore.innerText = "Score: ".concat(this.grid.score);
    }
  }, {
    key: "lost",
    value: function lost() {
      for (var row = 0; row < 4; row++) {
        for (var col = 0; col < 4; col++) {
          if (this.grid.grid[row][col] === " ") {
            return false;
          }
        }
      }

      return true;
    }
  }, {
    key: "won",
    value: function won() {
      for (var row = 0; row < 4; row++) {
        for (var col = 0; col < 4; col++) {
          if (this.grid.grid[row][col] === "🤰🏻") {
            return true;
          }
        }
      }

      return false;
    }
  }, {
    key: "openModal",
    value: function openModal() {
      modal.style.display = 'block';
    }
  }]);

  return Game;
}();



/***/ }),

/***/ "./scr/grid.js":
/*!*********************!*\
  !*** ./scr/grid.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Grid; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var points = {
  "🦟": 2,
  "🕷": 4,
  "🐧": 8,
  "😸": 16,
  "🐶": 32,
  "🐮": 64,
  "🐴": 128,
  "🤰🏻": 256
};
var icons = Object.keys(points);

var Grid =
/*#__PURE__*/
function () {
  function Grid(canvas) {
    _classCallCheck(this, Grid);

    this.ctx = canvas.getContext("2d");
    this.dimensions = {
      width: canvas.width,
      height: canvas.height
    };
    this.canvas = canvas;
    this.grid = this.makeGrid();
    this.score = 0;
  }

  _createClass(Grid, [{
    key: "makeGrid",
    value: function makeGrid() {
      var grid = [];

      for (var i = 0; i < 4; i++) {
        grid.push([]);

        for (var j = 0; j < 4; j++) {
          grid[i].push(" ");
        }
      }

      grid[0][0] = icons[0];
      grid[1][0] = icons[0];
      return grid;
    }
  }, {
    key: "print",
    value: function print() {
      this.ctx.clearRect(0, 0, this.dimensions.width, this.dimensions.height);
      var spacing = this.dimensions.width / 4;
      var symbols = [];

      for (var i = 0; i < 4; i++) {
        this.ctx.beginPath();
        this.ctx.moveTo(0, spacing * i);
        this.ctx.lineTo(this.dimensions.width, spacing * i);
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.moveTo(spacing * i, 0);
        this.ctx.lineTo(spacing * i, this.dimensions.height);
        this.ctx.stroke();
      }

      for (var rowIdx = 0; rowIdx < 4; rowIdx++) {
        var row = [];

        for (var colIdx = 0; colIdx < 4; colIdx++) {
          row.push(this.grid[rowIdx][colIdx] ? this.grid[rowIdx][colIdx] : "X"); //size according to icon

          this.ctx.font = "50px Verdana";
          this.ctx.fillText(this.grid[colIdx][rowIdx], spacing * rowIdx + 25, spacing * colIdx + 70);
        }

        symbols.push("".concat(row.join('|'), "\n"));
      }
    }
  }, {
    key: "placeNewSymbol",
    value: function placeNewSymbol() {
      var row = 10;
      var col = 10;

      while (!this.isValidPos(row, col) || this.grid[row][col] != " ") {
        row = Math.floor(Math.random() * 4);
        col = Math.floor(Math.random() * 4);
      }

      var idx = Math.floor(Math.random() * 2);
      this.grid[row][col] = icons[idx];
    }
  }, {
    key: "makeMove",
    value: function makeMove(direction) {
      switch (direction) {
        case 'left':
          for (var row = 0; row < 4; row++) {
            var newSymbols = this.moveHorizontally(row);

            for (var col = 0; col < 4; col++) {
              if (newSymbols.length > 0) {
                this.grid[row][col] = newSymbols.shift();
              } else {
                this.grid[row][col] = " ";
              }
            }
          }

          break;

        case 'right':
          for (var _row = 0; _row < 4; _row++) {
            var _newSymbols = this.moveHorizontally(_row);

            for (var _col = 3; _col >= 0; _col--) {
              if (_newSymbols.length > 0) {
                this.grid[_row][_col] = _newSymbols.pop();
              } else {
                this.grid[_row][_col] = " ";
              }
            }
          }

          break;

        case 'up':
          for (var _col2 = 0; _col2 < 4; _col2++) {
            var _newSymbols2 = this.moveVertically(_col2);

            for (var _row2 = 0; _row2 < 4; _row2++) {
              if (_newSymbols2.length > 0) {
                this.grid[_row2][_col2] = _newSymbols2.shift();
              } else {
                this.grid[_row2][_col2] = " ";
              }
            }
          }

          break;

        case 'down':
          for (var _col3 = 0; _col3 < 4; _col3++) {
            var _newSymbols3 = this.moveVertically(_col3);

            for (var _row3 = 3; _row3 >= 0; _row3--) {
              if (_newSymbols3.length > 0) {
                this.grid[_row3][_col3] = _newSymbols3.pop();
              } else {
                this.grid[_row3][_col3] = " ";
              }
            }
          }

          break;
      }
    }
  }, {
    key: "moveHorizontally",
    value: function moveHorizontally(row) {
      //symbols array hold current symbols
      var symbols = [];

      for (var col = 0; col < 4; col++) {
        if (this.grid[row][col] != " ") {
          symbols.push(this.grid[row][col]);
        }
      } //new symbols after combining


      var newSymbols = [];
      var i = 0;

      while (i < symbols.length) {
        if (symbols[i] === symbols[i + 1]) {
          var newIcon = icons[icons.indexOf(symbols[i]) + 1];
          newSymbols.push(newIcon);
          i += 2;
          this.score += points[newIcon];
        } else {
          newSymbols.push(symbols[i]);
          i++;
        }
      }

      return newSymbols;
    }
  }, {
    key: "moveVertically",
    value: function moveVertically(col) {
      //symbols array hold current symbols
      var symbols = [];

      for (var row = 0; row < 4; row++) {
        if (this.grid[row][col] != " ") {
          symbols.push(this.grid[row][col]);
        }
      } //new symbols after combining


      var newSymbols = [];
      var i = 0;

      while (i < symbols.length) {
        if (symbols[i] === symbols[i + 1]) {
          var newIcon = icons[icons.indexOf(symbols[i]) + 1];
          newSymbols.push(newIcon);
          i += 2;
          this.score += points[newIcon];
        } else {
          newSymbols.push(symbols[i]);
          i++;
        }
      }

      return newSymbols;
    }
  }, {
    key: "isValidPos",
    value: function isValidPos(row, col) {
      if (row < 0 || row > 4 || col < 0 || col > 4) {
        return false;
      }

      return true;
    }
  }]);

  return Grid;
}();



/***/ }),

/***/ "./scr/instructions.js":
/*!*****************************!*\
  !*** ./scr/instructions.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Instructions; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Instructions =
/*#__PURE__*/
function () {
  function Instructions() {
    _classCallCheck(this, Instructions);

    this.container = document.createElement("div");
    this.container.id = "instructions";
    this.render();
  }

  _createClass(Instructions, [{
    key: "render",
    value: function render() {
      var title1 = document.createElement("p");
      title1.id = "title";
      var titleText1 = document.createTextNode("HOW TO PLAY: ");
      var body1 = document.createElement("p");
      body1.id = "body";
      var bodyText1 = document.createTextNode("Use your arrow keys to move the tiles. When two tiles with the same icons touch, they merge into one! Once the blocks combine to form an old lady, you win! The blocks merge in this order: 🦟 ,🕷, 🐧, 😸, 🐶, 🐮, 🐴, 🤰🏻");
      var title2 = document.createElement("p");
      title2.id = "title";
      var titleText2 = document.createTextNode("ABOUT THIS GAME: ");
      var body2 = document.createElement("p");
      body2.id = "body";
      var bodyText2 = document.createTextNode("This game is is a single player sliding block game inspired by the game 2048 and the song There was an old lady... The objective of the game is to slide blocks on grid and combine them till they form an old lady. The blocks start out as flies, then spiders, bird, cat, dog, and so on, until it becomes a lady. 🦟 ,🕷, 🐧, 😸, 🐶, 🐮, 🐴, 🤰🏻");
      title1.appendChild(titleText1);
      body1.appendChild(bodyText1);
      title2.appendChild(titleText2);
      body2.appendChild(bodyText2);
      this.container.appendChild(title1);
      this.container.appendChild(body1);
      this.container.appendChild(title2);
      this.container.appendChild(body2);
    }
  }]);

  return Instructions;
}();



/***/ }),

/***/ "./scr/modal.js":
/*!**********************!*\
  !*** ./scr/modal.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Modal; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Modal =
/*#__PURE__*/
function () {
  function Modal() {
    _classCallCheck(this, Modal);

    this.container = document.createElement("div");
    this.container.id = "modal";
    this.render();
  }

  _createClass(Modal, [{
    key: "render",
    value: function render() {
      var content = document.createElement("div");
      content.id = "modal-content";
      this.container.appendChild(content);
      var text = document.createElement("h3");
      text.innerText = 'Game Over';
      content.appendChild(text);
      var reset = document.createElement('button');
      reset.id = "modal-reset";
      reset.innerText = "Try Again";
      content.appendChild(reset);
    }
  }]);

  return Modal;
}();



/***/ }),

/***/ "./scr/scores.js":
/*!***********************!*\
  !*** ./scr/scores.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Scores; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Scores =
/*#__PURE__*/
function () {
  function Scores() {
    _classCallCheck(this, Scores);

    this.container = document.getElementById("scores"); // this.container = document.createElement("div");
    // this.container.id = "scores";

    this.render();
  }

  _createClass(Scores, [{
    key: "render",
    value: function render() {
      var node = document.createElement("h3");
      node.id = "currentScore";
      var textnode = document.createTextNode("Score: 0");
      node.appendChild(textnode);
      this.container.appendChild(node);
    }
  }]);

  return Scores;
}();



/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map
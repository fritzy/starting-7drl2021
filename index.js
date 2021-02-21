import Config from './src/config';
import * as Pixi from 'pixi.js';
import Loader from './src/helpers/loader.js';

// don't blur our pixel art
Pixi.BaseTexture.scaleMode = Pixi.SCALE_MODES.NEAREST;
Pixi.settings.SCALE_MODE = Pixi.SCALE_MODES.NEAREST;

class Game {

  constructor(containDiv, loadDiv, loadBar) {

    this.lastTime = 0;
    this.elements = {
      contain: containDiv,
      load: loadDiv,
      bar: loadBar
    }
    this.app = new Pixi.Application(Config.pixi);
    console.log(`Screen ${Config.pixi.width}x${Config.pixi.height}`);

    this.scene = new Pixi.Container();


    this.load();

  }

  load() {
    Loader(this, () => {
      this.setup();
    });
  }

  setup() {

    this.elements.contain.removeChild(this.elements.load);
    this.elements.contain.appendChild(this.app.view);
    requestAnimationFrame(this.update.bind(this));
    this.sprite = new Pixi.Sprite.from('1x1');
    this.sprite.scale.set(2)
    this.app.stage.addChild(this.sprite);
  }

  start() {
  }

  pause() {
  }

  update(time) {
    requestAnimationFrame(this.update.bind(this));
    const dt = Math.min(time - this.lastTime, 500);
    this.lastTime = time;
  }
}

const containDiv = document.getElementById('rlcontainer');
const loadDiv = document.getElementById('rlloading')
const loadBar = document.getElementById('rlloadbar');
window.game = new Game(containDiv, loadDiv, loadBar);

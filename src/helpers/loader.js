import * as Pixi from 'pixi.js';

const graphics = {
}

const Loader = Pixi.Loader.shared;

const Load = (game, callback) => {

  let imageCount = 0;
  let progress = 0;
  let count = 0;

  Loader.add('assets/atlas.json');
  for (const frame of Object.keys(graphics)) {
    Loader.add(frame, 'assets/' + graphics[frame]);
    imageCount++;
  }


  Loader.onProgress.add((l, r) => {

    console.log('loaded', r);
    progress++;
    console.log('progress', progress);
  });

  Loader.load((loader, resources) => {

    callback();
  });


};

export default Load;

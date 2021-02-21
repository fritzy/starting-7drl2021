const atlas = {
  meta: {
    image: 'kenney1bitpack/Tilesheet/monochrome_transparent.png',
  },
  frames: {
  }
};

for (let row = 0; row < 22; row++) {
  for (let col = 0; col < 48; col++) {
    atlas.frames[`${col}x${row}`] = {
      frame: { x: 17 * col, y: 17 * row ,w: 16, h: 16 },
      sourceSize: { w: 16, h: 16 }
    };
  }
}

console.log(
  JSON.stringify(atlas, undefined, 4)
);

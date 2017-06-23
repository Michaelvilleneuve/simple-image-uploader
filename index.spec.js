const fs = require('fs');
const Image = require('./index');
const assert = require('assert');
const sizeOf = require('image-size');

let width  = 1600,
    height = 1900,
    data   = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==',
    path = 'myAwesomeImage.jpg';


describe('Image', () => {
  describe('#upload()', () => {
    it('should create a file when requested', (done) => {
      Image.upload(data, width, height, path)
        .then((path) => {
          assert(fs.existsSync(path));
          fs.unlinkSync(path);
          done();
        })
        .catch((err) => {
          console.log(err);
          assert(false);
          done();
        })
    });

    it('should change file width and height', (done) => {
      Image.upload(data, width, height, path)
        .then((path) => {
          const dimensions = sizeOf(path);
          assert(dimensions.width === width && dimensions.height === height);
          fs.unlinkSync(path);
          done();
        })
        .catch((err) => {
          assert(false);
          done();
        })
    });
  });
});

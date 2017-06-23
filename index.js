const sharp = require('sharp');
const fs = require('fs');

const SimpleImageUploader = {
  upload(base64, width, height, path) {
    const image = base64.replace(/^data:image\/\w+;base64,/, '');

    return new Promise((resolve, reject) => {
      sharp(new Buffer(image, 'base64')).resize(width, height)
        .toBuffer()
        .then(data => {
          fs.writeFile(path, data, { flag: 'wx', encoding: 'base64' }, (er) => {
            if (er === null) {
              resolve(path);
            } else {
              reject(er);
            }
          })
        });
    });
  }
};

module.exports = SimpleImageUploader;

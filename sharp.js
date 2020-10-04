const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const target = path.resolve(__dirname, 'dist/images');

if (!fs.existsSync(target)) {
  fs.mkdirSync(target);
}

fs.readdirSync(target).forEach((image) => {
  const extension = image.split('.').slice(-1).join('.');

  if (!image.endsWith(`-medium.${extension}`) && !image.endsWith(`-small.${extension}`)) {
    // mengubah ukuran gambar dengan lebar 1097px, dengan prefix -medium.ext
    sharp(`${target}/${image}`)
      .resize(1097)
      .toFile(
        path.resolve(
          __dirname,
          `${target}/${image.split('.').slice(0, -1).join('.')}-medium.${extension}`,
        ),
      );

    // mengubah ukuran gambar dengan lebar 675px, dengan prefix -small.ext
    sharp(`${target}/${image}`)
      .resize(675)
      .toFile(
        path.resolve(
          __dirname,
          `${target}/${image.split('.').slice(0, -1).join('.')}-small.${extension}`,
        ),
      );
  }
});

console.log('Resize image completed.');

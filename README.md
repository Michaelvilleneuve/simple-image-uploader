Image Uploader
=====

Just a simple base64 image upload library for Node.JS.
It features upload, custom path and image resize.

Install
----
`$ npm install --save simple-image-uploader`

Usage
----

It's all about `Image.upload()`.
The method returns a promise with the path of the uploaded image, so you can easily store it afterward.

Note : destination folder must exist

```javascript
import Image from 'simple-image-uploader';

let width = 1600,
    height = 1900;

const path = 'myAwesomeImage.jpg';

Image.upload(base64String, width, height, path)
    .then((image) => console.log(image)); // will return 'myAwesomeImage.jpg';
```


Run tests
-----
`$ npm test`

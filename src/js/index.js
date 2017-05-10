import SVGA from './export/svga.js';

let player = new SVGA.Player('#canvas');
let parser = new SVGA.Parser(undefined, undefined)
setTimeout(function () {
    parser.load('data:image/svga;base64,' + base64Test, (videoItem) => {
        player.setVideoItem(videoItem);
        player.startAnimation();
    });
}.bind(this), 3000)

// SVGA.autoload();
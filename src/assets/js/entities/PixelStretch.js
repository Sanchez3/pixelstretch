import * as PIXI from 'pixi.js'
import StretchFrag from '../shaders/StretchFrag.glsl'
import StretchVert from '../shaders/StretchVert.glsl'
class PixelStretch {
    constructor() {
        this.init()
    }
    init() {
        var renderer = new PIXI.WebGLRenderer({
            width: window.innerWidth,
            height: window.innerHeight,
            antialias: true,
            preserveDrawingBuffer: true,
        });
        document.body.appendChild(renderer.view);

        var loader=new PIXI.loaders.Loader();
        loader.add('pic1',)


    }
}
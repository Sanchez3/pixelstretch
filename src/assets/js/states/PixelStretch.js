import * as PIXI from 'pixi.js'
import PixelStretchFilter from '../filters/PixelStretchFilter.js'
import * as dat from 'dat.gui';

class PixelStretch {
    constructor() {
        this.init()
    }
    init() {
        var app = new PIXI.Application({
            width: window.innerWidth,
            height: window.innerHeight,
            resolution: window.devicePixelRatio,
            antialias: true,
            preserveDrawingBuffer: true,
        });
        this.app=app;
        document.body.appendChild(app.view);
        // PIXI.utils.clearTextureCache;
        app.loader.add('pic1', `/assets/img/pic${Math.floor(Math.random()*5+1)}.jpg`)
        app.loader.load(onLoaded.bind(this))

        function onLoaded(loader, resources) {
            this.pic = new PIXI.Sprite(resources.pic1.texture)
            app.stage.addChild(this.pic)

            // uniform float boundary;
            // uniform float hDir;
            var stretchfilter = new PixelStretchFilter(0.0, false)
            app.stage.filters = [stretchfilter]

            var gui = new dat.GUI();
            gui.add(stretchfilter, 'boundary', -1, 1);
            gui.add(stretchfilter, 'verticalDir').name('verticalDir');
            window.addEventListener('resize',this.handleResize.bind(this))
            this.handleResize();
            var count = 0;
            app.ticker.add(function() {
                // count += 0.01;
                // stretchfilter.boundary = Math.abs(Math.sin(count))
            })
        }

    }

    handleResize() {
        var w=window.innerWidth;
        var h= window.innerHeight;
        var pic= this.pic;
        var s=pic.width/pic.height;
        this.app.renderer.resize(w,h);
        if(s>w/h){
            pic.width=w;
            pic.height=w/s;
        }else{
            pic.height=h;
            pic.width=h*s;
        }

    }

}
export default PixelStretch;
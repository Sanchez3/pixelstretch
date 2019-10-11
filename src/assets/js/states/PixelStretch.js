import * as PIXI from 'pixi.js'
import PixelStretchFilter from '../filters/PixelStretchFilter.js'

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
        document.body.appendChild(app.view);
        // PIXI.utils.clearTextureCache;
        app.loader.add('pic1', '/assets/img/pic1.jpg')
        app.loader.load(onLoaded)


        function onLoaded(loader, resources) {
            var pic = new PIXI.Sprite(resources.pic1.texture)
            app.stage.addChild(pic)


            // uniform float boundary;
            // uniform float hDir;
            var stretchfilter = new PixelStretchFilter(0.5,false)
            app.stage.filters = [stretchfilter]

            //stretchfilter.uniforms.split_center_point
            var count=0;
            app.ticker.add(function() {
                count += 0.01;
                stretchfilter.boundary=Math.abs(Math.sin(count))
            })

        }
    }

}
export default PixelStretch;
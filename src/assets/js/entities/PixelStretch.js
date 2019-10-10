import * as PIXI from 'pixi.js'
import StretchFrag from '../shaders/StretchFrag.glsl'
import StretchVert from '../shaders/StretchVert.glsl'
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


            //uniform sampler2D texture;
            // uniform float split_center_point;
            // uniform float split_size;
            var stretchfilter = new PIXI.Filter(null, StretchFrag, {
                // split_center_point: { type: 'f', value: 0.5 },
                // split_size: { type: 'f', value: 0.001 }
                split_center_point:0.2,
                split_size:0.001
            })
            app.stage.filters = [stretchfilter]
            //stretchfilter.uniforms.split_center_point

            app.ticker.add(function() {

                // stretchfilter.uniforms.split_center_point+= app.ticker.elapsedMS * 0.001;
                stretchfilter.uniforms.split_size+= app.ticker.elapsedMS * 0.001
            })

        }
    }

}
export default PixelStretch;
import { Filter, defaultVertex } from 'pixi.js';
// import { Matrix, Point } from 'pixi.js/math';
// import vertex from './pixelStretch.vert';
import fragment from './pixelStretch.frag';

class PixelStretchFilter extends Filter {
    constructor(boundary, hDir) {
        super(defaultVertex, fragment);

        this.boundary = boundary || 0.5;
        this.hDir = hDir || true;
        this.uniforms.dimensions = new Float32Array(2);
    }
    /**
     * Override existing apply method in PIXI.Filter
     * @private
     */
    apply(filterManager, input, output, clear) {
        this.uniforms.dimensions[0] = input.filterFrame.width;
        this.uniforms.dimensions[1] = input.filterFrame.height;
        filterManager.applyFilter(this, input, output, clear);
    }

    set boundary(value) {
        this.uniforms.boundary = value;
    }
    get boundary() {
        return this.uniforms.boundary;
    }

    set hDir(value) {
        this.uniforms.hDir = value;
    }
    get hDir() {
        return this.uniforms.hDir;
    }
}

export default PixelStretchFilter;
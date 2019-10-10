varying vec2 vTextureCoord;
attribute vec2 position;
uniform mat3 projectionMatrix;

void main(void) {
	// vUv = uv;
	gl_Position = projectionMatrix * vec4( position, 1.0 );
}
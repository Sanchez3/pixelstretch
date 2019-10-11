// precision highp float;
varying vec2 vTextureCoord;

uniform sampler2D uSampler;

uniform float boundary;
uniform bool hDir;

uniform vec2 dimensions;
//direction
uniform float sinDir;
uniform float cosDir;



vec4 stretch(sampler2D tex, float boundary, bool hDir){
    // float boundary = boundary;
    // vec4 origColor = texture2D(tex, vTextureCoord);
    vec4 color = texture2D(tex, vTextureCoord);
    vec2 p = vTextureCoord;
    if(hDir){
        if (p.x < boundary){
            vec2 n = vec2(vTextureCoord.x, vTextureCoord.y);
            n.x = n.x;
            color = texture2D(tex, n);
        }else{
            vec2 n = vec2(vTextureCoord.x, vTextureCoord.y);
            n.x = (boundary);
            color = texture2D(tex, n);
        }
    }else{
        if (p.x > boundary){
            vec2 n = vec2(vTextureCoord.x, vTextureCoord.y);
            n.x = n.x ;
            color = texture2D(tex, n);
        }else{
            vec2 n = vec2(vTextureCoord.x, vTextureCoord.y);
            n.x = (boundary);
            color = texture2D(tex, n);
        }
    }
    return color;
}

void main(void) {
    vec4 color;
    color=stretch(uSampler, boundary, hDir);

    gl_FragColor = color;
}
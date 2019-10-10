varying vec2 vTextureCoord;
precision highp float;
precision highp int;
uniform sampler2D uSampler;
uniform float split_center_point;
uniform float split_size;


void main(void) {
    float split_left_side = (split_center_point - split_size/2.0);
    float split_right_side = (split_center_point + split_size/2.0);
    
    vec4 orig_color = texture2D(uSampler, vTextureCoord);

    vec4 color = texture2D(uSampler, vTextureCoord);


    vec2 p = vTextureCoord;
    if (p.x < split_left_side){
        vec2 n = vec2(vTextureCoord.x, vTextureCoord.y);
        n.x = (n.x + split_size/2.0);
        color = texture2D(uSampler, n);
    }
    
    if (p.x > split_right_side){
        vec2 n2 = vec2(vTextureCoord.x, vTextureCoord.y);
        n2.x = (n2.x - split_size/2.0);
        color = texture2D(uSampler, n2);
    }
    
    if (p.x > split_left_side && p.x < split_right_side){
     vec2 n = vec2(vTextureCoord.x, vTextureCoord.y);
        n.x = (split_center_point);
     color = texture2D(uSampler, n);
    }


    gl_FragColor = color;
}
varying vec2 vUv;
uniform float uTime;
uniform vec3 uBackColor;
uniform sampler2D uTexture;

void main() {
    if (gl_FrontFacing) {
        // gl_FragColor = vec4(sin(uTime * 2.0), vUv.x, 1.0, 1.0);
        gl_FragColor = texture2D(uTexture, vUv);
    } else {
        gl_FragColor = vec4(uBackColor, 1.0);
    }
}

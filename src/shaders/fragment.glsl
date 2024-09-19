varying vec3 vUv;
uniform float uTime;
uniform vec3 uBackColor;

void main() {
    if (gl_FrontFacing) {
        gl_FragColor = vec4(sin(uTime * 2.0), vUv.x, 1.0, 1.0);
    } else {
        gl_FragColor = vec4(uBackColor, 1.0);
    }
}

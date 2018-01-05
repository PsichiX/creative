precision mediump float;

varying vec2 vTexCoord;
uniform vec4 uColor;

void main() {
  float f = vTexCoord.y;
  
  gl_FragColor = vec4(1.0, 1.0, 1.0, f * f) * uColor;
}

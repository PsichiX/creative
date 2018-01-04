precision mediump float;

varying vec2 vTexCoord;
uniform vec4 uColor;

void main() {
  float d = length(vTexCoord * 2.0 - 1.0);
  float f = max(0.0, 1.0 - d);

  gl_FragColor = vec4(1.0, 1.0, 1.0, f * f) * uColor;
}

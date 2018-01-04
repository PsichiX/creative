precision mediump float;

uniform sampler2D sBase;
uniform vec4 uColor;
uniform vec2 uTresholds;

varying vec2 vTexCoord;

void main() {
  vec4 col = texture2D(sBase, vTexCoord);
  float up = step(uTresholds.x, col.b);
  float down = step(col.b, uTresholds.y);
  vec2 tint = step(0.01, col.xy);

  gl_FragColor = vec4(tint, 0.0, 1.0) * uColor * up * down;
}

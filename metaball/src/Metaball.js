import { Script, vec2 } from 'oxygen-core';

export default class Metaball extends Script {

  static get propsTypes() {
    return {
      ...Script.propsTypes,
      xRange: 'number',
      yRange: 'number',
      speed: 'number'
    };
  }

  static factory() {
    return new Metaball();
  }

  constructor() {
    super();

    this.xRange = 0;
    this.yRange = 0;
    this.speed = 0;
    this.redirect();
  }

  redirect() {
    this._dir = vec2.fromValues(
      Math.random() * 2 - 1,
      Math.random() * 2 - 1
    );
    vec2.normalize(this._dir, this._dir);
  }

  onUpdate(deltaTime) {
    deltaTime *= 0.001;

    const { entity, speed, xRange, yRange, _dir } = this;
    const { position } = entity;
    entity.setPosition(
      position[0] + _dir[0] * speed * deltaTime,
      position[1] + _dir[1] * speed * deltaTime
    );

    if (position[0] < -xRange || position[0] > xRange ||
        position[1] < -yRange || position[1] > yRange
    ) {
      entity.setPosition(
        Math.max(-xRange, Math.min(xRange, position[0])),
        Math.max(-yRange, Math.min(yRange, position[1]))
      );
      this.redirect();
    }
  }

}

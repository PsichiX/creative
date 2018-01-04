import { Script } from 'oxygen-core';

export default class Randomizer extends Script {

  static get propsTypes() {
    return {
      ...Script.propsTypes,
      xRange: 'number',
      yRange: 'number'
    };
  }

  static factory() {
    return new Randomizer();
  }

  constructor() {
    super();

    this.xRange = 0;
    this.yRange = 0;
  }

  onAttach() {
    this.entity.setPosition(
      (Math.random() * 2 - 1) * this.xRange,
      (Math.random() * 2 - 1) * this.yRange
    );
  }

}

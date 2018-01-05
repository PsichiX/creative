import { Script } from 'oxygen-core';

export default class MouseController extends Script {

  static factory() {
    return new MouseController();
  }

  onMouseMove(unitVec, screenVec) {
    const { entity } = this;

    const cameraEntity = entity.findEntity('/scene/density-field-camera');
    if (!cameraEntity) {
      return;
    }

    const camera = cameraEntity.getComponent('Camera2D');
    if (!camera) {
      return;
    }

    const { cachedWorldWidth, cachedWorldHeight } = camera;
    const { scale } = entity;
    entity.setPosition(
      unitVec[0] * cachedWorldWidth * 0.5,
      -unitVec[1] * cachedWorldHeight * 0.5
    );
  }

  onUpdate(deltaTime) {
    const { entity } = this;
    entity.setRotation(entity.getRotation() + deltaTime * 0.001);
  }

}

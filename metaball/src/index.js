import { lazyInitialization, System, vec4 } from 'oxygen-core';
import Randomizer from './Randomizer';
import Metaball from './Metaball';
import MouseController from './MouseController';

lazyInitialization({
  render: {
    screen: 'screen-0',
    extensions: [
      'OES_texture_float',
      'OES_texture_float_linear'
    ]
  },
  store: { id: 'oxygen-core' }
});

const {
  AssetSystem,
  RenderSystem,
  EntitySystem
} = System.systems;

EntitySystem.registerComponent('Randomizer', Randomizer.factory);
EntitySystem.registerComponent('Metaball', Metaball.factory);
EntitySystem.registerComponent('MouseController', MouseController.factory);

vec4.set(RenderSystem.clearColor, 0, 0, 0, 1);

AssetSystem.load('pack://assets.pack')
  .then(packAsset => AssetSystem.fetchEngine = packAsset.makeFetchEngine())
  .then(() => AssetSystem.load('json://config.json'))
  .then(configAsset => AssetSystem.loadAll(configAsset.data.assets))
  .then(() => System.events.triggerLater(
    'change-scene',
    'scene://scenes/game.json'
  ));

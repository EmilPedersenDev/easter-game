import GameScene from "../../game/game";
import ScoreScene from "../../game/score";

let config = {
  type: Phaser.WEBGL,
  scale: {
    mode: Phaser.Scale.FIT,
    parent: "canvas",
    width: 800,
    height: 600,
  },
  pixelArt: true,
  physics: {
    default: "arcade",
    arcade: {
      gravity: {
        y: 1000,
      },
      debug: false,
    },
  },
  scene: [GameScene, ScoreScene],
};

export default config;

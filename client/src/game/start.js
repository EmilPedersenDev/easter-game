class StartScene extends Phaser.Scene {
  constructor() {
    super({
      key: "StartScene",
    });
  }

  preload() {
    this.load.image("sky", "assets/background/skyScaled.png");
    this.load.image("mountain", "assets/background/mountainScaled.png");
    this.load.image("platform", "assets/background/platformScaled.png");
  }
  create() {
    this.background1 = this.add.tileSprite(400, 300, 800, 600, "sky");
    this.background2 = this.add.tileSprite(400, 300, 800, 600, "mountain");

    this.ground = this.add.tileSprite(400, 568, 800, 100, "platform");
    // this.physics.add.existing(this.ground);
    // this.ground.body.immovable = true;
    // this.ground.body.moves = false;

    // this.logo = this.add.image(400, 180, 'logo')
    // this.logo.setScale(1.5)

    // let play = this.add.image(400, 400, 'play')
    // play.setScale(4)
    // play.setInteractive()
    // play.on('pointerdown', () => this.scene.start('GameScene'))
    // play.on('pointerover', () => play.setTint(0xcccccc))
    // play.on('pointerout', () => play.setTint(0xffffff))
  }

  update() {
    this.background1.tilePositionX += 7;
    this.background2.tilePositionX += 3;
    // this.background3.tilePositionX += 10
    // this.background4.tilePositionX += 10
    // this.background5.tilePositionX += 10
    // this.ground.tilePositionX += 10;
  }
}

export default StartScene;

import api from "../service/api/index";
import store from "../store/index";

class GameScene extends Phaser.Scene {
  constructor() {
    super({
      key: "GameScene",
    });
    this.player;
    this.isGameOver = false;
    this.eggs;
    this.bombs;
    this.characterScale = 2;
    this.eggScale = 0.7;
    this.bombScale = 3;
    this.score = 0;
    this.scoreText;
    this.gameOverText;
    this.timedEvent;
    this.timedEvent1;
    this.death;
  }

  preload() {
    this.isGameOver = false;
    this.score = 0;
    this.load.image("sky", "assets/background/skyScaled.png");
    this.load.image("mountain", "assets/background/mountainScaled.png");
    this.load.image("platform", "assets/background/platform.png");
    this.load.image("restart", "assets/sprite/restart.png");
    this.load.image("gameover", "assets/sprite/gameover.png");
    this.load.image("egg1", "assets/sprite/egg-1.png");
    this.load.image("egg2", "assets/sprite/egg-2.png");
    this.load.image("egg3", "assets/sprite/egg-3.png");
    this.load.image("egg4", "assets/sprite/egg-4.png");
    this.load.image("egg5", "assets/sprite/egg-5.png");
    this.load.image("egg6", "assets/sprite/egg-6.png");
    this.load.image("egg7", "assets/sprite/egg-7.png");
    this.load.image("egg8", "assets/sprite/egg-7.png");
    this.load.image("egg9", "assets/sprite/egg-7.png");
    this.load.image("egg10", "assets/sprite/egg-7.png");
    this.load.spritesheet("doux", "assets/sprite/dude.png", {
      frameWidth: 32,
      frameHeight: 48,
    });
    this.load.spritesheet("bomb", "assets/sprite/bombs.png", {
      frameWidth: 14.5,
      frameHeight: 12,
    });
    this.load.audio("pickup", "assets/sound/pickup.wav");
    this.load.audio("jump", "assets/sound/jump.wav");
  }

  create() {
    this.background1 = this.add.tileSprite(400, 300, 800, 600, "sky");
    this.background2 = this.add.tileSprite(400, 300, 800, 600, "mountain");

    this.ground = this.add.tileSprite(400, 568, 800, 100, "platform");
    this.physics.add.existing(this.ground);
    this.ground.body.immovable = true;
    this.ground.body.moves = false;

    this.player = this.physics.add.sprite(100, 450, "doux");
    this.player.getBounds();
    this.player.setBounce(0.2);
    this.player.setCollideWorldBounds(true);
    this.player.setScale(this.characterScale);

    this.eggs = this.physics.add.group();
    this.bombs = this.physics.add.group();

    this.timedEvent = this.time.addEvent({
      delay: 1000,
      callback: onEvent,
      callbackScope: this,
      loop: true,
    });
    this.timedEvent1 = this.time.addEvent({
      delay: 3000,
      callback: onEvent1,
      callbackScope: this,
      loop: true,
    });

    function onEvent() {
      this.timedEvent.reset({
        delay: Phaser.Math.Between(1000, 5000),
        callback: onEvent,
        callbackScope: this,
        loop: true,
      });

      let randomizeEggs = [
        "egg1",
        "egg2",
        "egg3",
        "egg4",
        "egg5",
        "egg6",
        "egg7",
        "egg8",
        "egg9",
        "egg10",
      ][Math.floor(Math.random() * 10)];

      let egg = this.eggs.create(
        800,
        Phaser.Math.Between(200, 485),
        randomizeEggs
      );
      egg.setScale(this.eggScale);
      egg.setCircle(6.5);
      egg.setBounceY(Phaser.Math.FloatBetween(0.6, 1.2));
      this.eggs.setVelocityX(Phaser.Math.Between(-1000, -300));
    }

    function onEvent1() {
      this.timedEvent1.reset({
        delay: Phaser.Math.Between(3000, 5000),
        callback: onEvent1,
        callbackScope: this,
        loop: true,
      });

      let bomb = this.bombs.create(800, Phaser.Math.Between(300, 485), "bomb");
      bomb.setScale(this.bombScale);
      bomb.setCircle(3);
      bomb.anims.play("boom", true);
      bomb.setBounceY(1.2);
      this.bombs.setVelocityX(Phaser.Math.Between(-1000, -300));
    }

    this.anims.create({
      key: "run",
      frames: this.anims.generateFrameNumbers("doux", { start: 5, end: 9 }),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: "hurt",
      frames: this.anims.generateFrameNumbers("doux", { start: 4, end: 4 }),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: "boom",
      frames: this.anims.generateFrameNumbers("bomb", { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1,
    });

    function collectEgg(player, egg) {
      egg.destroy();
      let pickup = this.sound.add("pickup");
      pickup.play();
      this.score += 100;
      this.scoreText.setText("SCORE: " + this.score);
    }

    this.scoreText = this.add.text(16, 16, "SCORE: 0", {
      fontSize: "32px",
      fill: "#000",
    });

    this.physics.add.collider(this.player, this.ground);
    this.physics.add.collider(this.eggs, this.ground);
    this.physics.add.collider(this.bombs, this.ground);
    this.physics.add.overlap(this.player, this.eggs, collectEgg, null, this);
    this.physics.add.collider(this.player, this.bombs, hitBomb, null, this);
    this.cameras.main.startFollow(this.player, true, 0.05, 0.05);
    this.cameras.main.setBounds(0, 0, 800, 600);

    function hitBomb() {
      this.physics.pause();
      this.isGameOver = true;
      this.timedEvent.paused = true;
      this.timedEvent1.paused = true;
      this.player.setTint(0xff0000);
      this.player.anims.play("hurt");

      let userId = localStorage.getItem("userId");

      let scoreRequest = {
        userId: userId,
        score: this.score,
      };

      api
        .patch(`/users/${scoreRequest.userId}/score`, {
          score: scoreRequest.score,
        })
        .then((result) => {
          if (result.data.isScoreChanged) {
            store
              .dispatch("getUsers")
              .then(() => {
                this.scene.start("ScoreScene");
              })
              .catch((err) => {
                console.error(err);
              });
          } else {
            this.scene.start("ScoreScene");
          }
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }

  update() {
    if (this.isGameOver === false) {
      this.score += 1;
      this.scoreText.setText("SCORE: " + this.score);
      let cursors = this.input.keyboard.createCursorKeys();
      this.player.anims.play("run", true);
      if (cursors.right.isDown) {
        this.player.setVelocityX(200);

        this.player.flipX = false;
      } else if (cursors.left.isDown) {
        this.player.setVelocityX(-260);
      } else {
        this.player.setVelocityX(0);
      }
      if (cursors.up.isDown && this.player.body.touching.down) {
        let jump = this.sound.add("jump");
        jump.play();
        this.player.setVelocityY(-600);
      }
      this.background1.tilePositionX += 10;
      this.background2.tilePositionX += 3;
      this.ground.tilePositionX += 10;
    }
  }
}

export default GameScene;

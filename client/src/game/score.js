import store from "../store/index";
import "../assets/scss/fonts.scss";

class ScoreScene extends Phaser.Scene {
  constructor() {
    super({
      key: "ScoreScene",
    });
    this.playerText;
    this.text;
    this.death;
  }

  preload() {
    this.load.image("restart", "assets/sprite/restart.png");
    this.load.audio("death", "assets/sound/death.mp3");
  }

  create() {
    let restart = this.add.image(400, 500, "restart");

    this.death = this.sound.add("death");
    this.death.play();

    let users = store.getters.getUsers;

    let scoreStyle = {
      fontFamily: "Joystix Monospace",
      fontSize: "18px",
      fill: "#fff",
      align: "center",
    };

    let headerStyle = {
      fontFamily: "Joystix Monospace",
      fontSize: "24px",
      fill: "#fff",
    };

    let gameOverStyle = {
      fontFamily: "Joystix Monospace",
      fontSize: "36px",
      fill: "#e14eca",
    };

    this.add.text(258, 180, "Highscore Top 5", headerStyle);

    this.add.text(260, 70, "Game Over", gameOverStyle);

    let textPositionY = 250;
    users.forEach((user, i) => {
      console.log(user);
      this.text = this.add.text(
        280,
        textPositionY,
        `${i + 1}. ${user.username} - ${user.score}`,
        scoreStyle
      );
      textPositionY += 30;
    });
    console.log(users);
    console.log(this.text);
    restart.setScale(4);
    restart.setInteractive();
    restart.on("pointerdown", () => {
      this.death.stop();
      this.scene.start("GameScene");
    });
    restart.on("pointerover", () => restart.setTint(0xcccccc));
    restart.on("pointerout", () => restart.setTint(0xffffff));
  }
}

export default ScoreScene;

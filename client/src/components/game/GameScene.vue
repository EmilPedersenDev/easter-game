<template>
  <div id="canvas"></div>
</template>

<script>
import config from "../../service/config/game-config";
export default {
  name: "game-scene",
  mounted() {
    new Phaser.Game(config);
    this.$nextTick(() => {
      let gameCanvas = document.getElementsByTagName("CANVAS");
      let [canvas] = gameCanvas;
      if (!canvas) return;
      canvas.style.maxHeight = "100vh";
    });
  },
};
</script>

<style lang="scss" scoped>
#canvas {
  text-align: center;
  padding-top: 20px;
}
</style>

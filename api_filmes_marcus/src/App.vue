<script>
import ObjetoView from "./views/ObjetoView.vue";
export default {
  components: { ObjetoView },
};
</script>

<template>
  <ObjetoView />

  <main>
    <div class="container">
      <img src="./assets/jamalzinholindo.jpg" alt="jamal murray" />
      <img src="./assets/jamalzinholindo.jpg" alt="jamal murray" />
      <img src="./assets/jamalzinholindo.jpg" alt="jamal murray" />
    </div>
  </main>
</template>

<style>
.container {
  display: flex;
}

img {
  width: 500px;
  height: 500px;
  margin: 20px;
}
</style>

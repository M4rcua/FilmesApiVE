<script>
import HeaderView from "./views/HeaderView.vue";
export default {
  components: { HeaderView },
};
</script>

<template>
  <HeaderView />

  <main>
    <div>
      <h2>Destaques</h2>

      <img src="./assets/jamalzinholindo.jpg" alt="jamalmurray" />
      <img src="./assets/jamalzinholindo.jpg" alt="jamalmurray" />
      <img src="./assets/jamalzinholindo.jpg" alt="jamalmurray" />
      <img src="./assets/jamalzinholindo.jpg" alt="jamalmurray" />
    </div>

    <div>
      <h2>Filmes</h2>

      <img src="./assets/jamalzinholindo.jpg" alt="jamalmurray" />
      <img src="./assets/jamalzinholindo.jpg" alt="jamalmurray" />
      <img src="./assets/jamalzinholindo.jpg" alt="jamalmurray" />
      <img src="./assets/jamalzinholindo.jpg" alt="jamalmurray" />
    </div>

    <div>
      <h2>Séries</h2>

      <img src="./assets/jamalzinholindo.jpg" alt="jamalmurray" />
      <img src="./assets/jamalzinholindo.jpg" alt="jamalmurray" />
      <img src="./assets/jamalzinholindo.jpg" alt="jamalmurray" />
      <img src="./assets/jamalzinholindo.jpg" alt="jamalmurray" />
    </div>
  </main>
</template>

<style>
.container {
  display: flex;
}

img {
  width: 40%;
  z-index: 2;
  width: 300px;
  margin: 20px;
}
</style>

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

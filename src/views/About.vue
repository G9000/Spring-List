<template>
  <div class="about-section">
    <img src="../assets/springlist.svg" alt="">
    <h3>Spring List Copyright &copy; 2021 made with Vue js</h3>
    <div class="about-link">
      <a href="https://juliocaesar.co/" target="_blank">Origin</a>
      <a href="https://github.com/G9000/Spring-List" target="_blank">Source code</a>
      <router-link to="/">back</router-link>
    </div>
  </div>
</template>

<script>
export default {
    name: "About"
}
</script>

<style>
.about-link {
  display: flex;
  gap: 2rem;
  justify-content: center;
}
</style>
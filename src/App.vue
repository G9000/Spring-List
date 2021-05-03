<template>
  <div class="wrapper">
    <router-view></router-view>
  </div>
</template>

<script>

import './styles/reset.css'
import './styles/global.css'

export default {
  name: 'App',
  components: {

  }
}
</script>

<style>

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: whitesmoke;
}

.wrapper {
  display: flex;
  justify-content: center;
  min-height: 100vh;
  width: min(2400px, 90%);
  margin: 0 auto;
  padding: 5rem 0;
  gap: 5rem;
}

</style>
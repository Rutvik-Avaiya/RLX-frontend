<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/login">Home</router-link> |
      <router-link to="/about">About</router-link> -->
              <navbar v-if="!['welcome'].includes($route.name)" />
      <!-- <navbar/> -->
      <router-view />
    </div>
  </div>
</template>
<script>
import Navbar from './components/navbar.vue';

export default {
  components: {Navbar  },
};


</script>

<style>

* {
  margin: 0;
  padding: 0;
}
html {
  scroll-behavior: smooth;
  font-family: sans-serif !important;
}
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>

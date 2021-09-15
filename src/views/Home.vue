<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <banner/>
    <features/>    
    <download/>
    <aboutus/>
    <bottom/>
  </div>
</template>

<script>
import Bottom from '../components/bottom.vue'
import Aboutus from '../components/homepage/aboutus.vue'
import Banner from '../components/homepage/banner.vue'
import Download from '../components/homepage/download.vue'
import Features from '../components/homepage/features.vue'

export default {
  name: 'Home',
  components: {
    Banner,
    Features,
    Download,
    Aboutus,
    Bottom
  }
}
  </script>

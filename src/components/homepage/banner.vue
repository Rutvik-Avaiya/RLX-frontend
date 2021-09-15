<template>
  <div class="welcome">
    <h1>
      Remote<br />
      Logging Extension
    </h1>

    <vue-typed-js
      :strings="[
        'simple, robust, minimal and configurable liabrary.',
        'Multi-Channel collaboration supported with customization.',
        'Highly configurable to debug the runtime information.',
        'No additional extension installation required.',
      ]"
      :backSpeed="15"
      :smartBackspace="true"
      :backDelay="1200"
      :startDelay="1000"
      :typeSpeed="25"
      :loop="true"
    >
      <h2 class="typing" ></h2>
    </vue-typed-js>
  </div>
</template>

<script>
export default {
  name: "banner",
};
</script>

<style scoped>
.welcome {
  background: linear-gradient(
    135deg,
    rgb(23, 63, 145) 0%,
    rgb(9, 236, 215) 100%
  );

  position: relative;
  height: 600px;
  color: white;
}
.welcome h1 {
  font-size: 70px;
  margin-top: 0px;
  padding-top: 160px;
  margin-left: 40px;
}
h2 {
  margin-left: 45px;
}
</style>
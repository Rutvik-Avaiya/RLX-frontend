<template>
  <div class="main" id="login">
    <section class="signup">
      <!-- <img src="images/signup-bg.jpg" alt=""> -->
      <div class="container">
        <div class="signup-content text-left">
          <form id="login-form" method="POST" class="signup-form">
            <h2 class="form-title">Login here</h2>
            <div class="form-group">
              <input
                v-model="inputs.email"
                type="text"
                class="form-input"
                placeholder="Your Email"
                
              />
              <div v-if="!email">
                <span class="text-danger">Invalid email</span>
              </div>
            </div>
            <div class="form-group">
              <input
                v-model="inputs.password"
                type="password"
                class="form-input"
                placeholder="Password"
              />

              <div v-if="!password">
                <span class="text-danger">Invalid password</span>
              </div>
            </div>
            <div class="form-group">
              <input
                @click="authenticate"
                type="button"
                value="login"
                class="form-submit"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "login",
  data() {
    return {
      inputs: {
        email: null,
        password: null,
      },
    };
  },
  methods: {
    authenticate() {
      if (!(this.email || this.password || this.uname)) {
        return;
      }
     
    },
  },
  computed: {
    email() {
      const { email } = this.inputs;
      const emailRegx = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
      return email && emailRegx.test(email) ? true : false;
    },
    password() {
      const { password } = this.inputs;
      return password && password.length > 7 ? true : false;
    },
  },
};
</script>

<style scoped>
.text-left {
  text-align: left;
}

.text-danger {
  color: red;
}
</style>
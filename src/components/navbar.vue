<template  id ="navbar">
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"><img src="../assets/logo1.png" /></a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <!-- <a class="nav-link " href="#">Sign up</a> -->
            <b-button name="loginbtn" class="show-btn width" v-b-modal.login>
              <i class="fa fa-user" aria-hidden="true"></i> Log in</b-button
            >
          </li>
          <li class="nav-item">
            <!-- <a class="nav-link " href="#">Login</a> -->
            <b-button name="signupbtn " class="show-btn width" v-b-modal.signup>
              <i class="fa fa-user-plus" aria-hidden="true"></i> Sign
              up</b-button
            >
          </li>
        </ul>
      </div>
    </div>
    <div>
      <b-modal ref="my-modal" id="login" hide-footer title="Login here ">
        <div class="d-block text-center">
          <div class="main" id="login">
            <section class="signup">
              <!-- <img src="images/signup-bg.jpg" alt=""> -->
              <div class="container">
                <div class="signup-content">
                  <form id="login-form" method="POST" class="signup-form">
                    <h2 class="form-title">Login here</h2>
                    <div class="form-group">
                      <input
                        v-model="login.email"
                        type="text"
                        class="form-input"
                        placeholder="Your Email"
                        required
                      />
                      <div v-if="!email(login.email)">
                        <span class="text-danger">Invalid email</span>
                      </div>
                    </div>
                    <div class="form-group">
                      <input
                        v-model="login.password"
                        type="password"
                        class="form-input"
                        placeholder="Password"
                        required
                      />

                      <div v-if="!password(login.password)">
                        <span class="text-danger">Invalid password</span>
                      </div>
                    </div>
                    <div class="form-group">
                      <input
                        id="closemodel"
                        @click="authenticatelogin"
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
        </div>
      </b-modal>
    </div>
    <div>
      <b-modal ref="my-modal" id="signup" hide-footer title="Sign up">
        <div class="d-block text-center">
          <div class="main" id="signup">
            <section class="signup">
              <div class="container">
                <div class="signup-content">
                  <form
                    method="POST"
                    @submit.prevent
                    id="signup-form"
                    class="signup-form"
                  >
                    <h2 class="form-title">Create account</h2>
                    <div class="form-group">
                      <input
                        type="text"
                        v-model="register.uname"
                        class="form-input"
                        name="uname"
                        id="uname"
                        placeholder="Your Name"
                      />
                      <div v-if="!uname(register.uname)">
                        <span class="text-danger">Please fill this field</span>
                      </div>
                    </div>
                    <div class="form-group">
                      <input
                        type="email"
                        v-model="register.email"
                        class="form-input"
                        name="email"
                        id="email"
                        placeholder="Your Email"
                        required
                      />
                      <div v-if="!email(register.email)">
                        <span class="text-danger">Invalid email</span>
                      </div>
                    </div>
                    <div class="form-group">
                      <input
                        type="password"
                        v-model="register.password"
                        class="form-input"
                        name="password"
                        id="password"
                        placeholder="Password"
                        required
                      />
                      <div v-if="!password(register.password)">
                        <span class="text-danger">Invalid password</span>
                      </div>
                    </div>
                    <div class="form-group">
                      <input
                        type="password"
                        v-model="register.confirmpassword"
                        class="form-input"
                        name="re_password"
                        id="re_password"
                        placeholder="Confirm your password"
                        onkeyup="check();"
                      />
                      <div
                        v-if="
                          !confirmpassword(
                            register.password,
                            register.confirmpassword
                          )
                        "
                      >
                        <span class="text-danger">Password doesn't match</span>
                      </div>
                    </div>
                    <div class="form-group">
                      <button
                        type="button"
                        @click="authenticate"
                        id="submit"
                        class="form-submit"
                      >
                        Sign up
                      </button>
                    </div>
                  </form>

                  <!-- <p class="loginhere">
                            Have already an account ? 
                    </p>  -->
                </div>
              </div>
            </section>
          </div>
        </div>
      </b-modal>
    </div>
  </nav>
</template>
<script>
// $('#login').modal('hide')
import axios from "axios";
//import login from "./components/login"

export default {
  name: "navbar",
  data() {
    return {
      register: {
        uname: null,
        email: null,
        password: null,
        confirmpassword: null,
      },
      login: {
        email: null,
        password: null,
        errors: [],
      },
    };
  },
  methods: {
    authenticate() {
      this.$bvModal.hide("signup");
      const { email, password, uname, confirmpassword } = this.register;
      if (!(email || password || uname || confirmpassword)) {
        return;
      }
      this.$router.push({ path: "/welcome" });
      this.$router.push({ name: "welcome" });

      axios
        .post("http://192.168.0.4:1337/dev-account", {
          uname: uname,
          email: email,
        })
        .then((data) => {
          console.log(data);
        })
        .catch((e) => console.log(e));
    },
    authenticatelogin() {
      this.$bvModal.hide("login");
    },

    uname(val) {
      return val && val.length > 0 ? true : false;
    },
    email(val) {
      const emailRegx = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
      return val && emailRegx.test(val) ? true : false;
    },
    password(val) {
      return val && val.length > 7 ? true : false;
    },
    confirmpassword(val, confirmed) {
      return confirmed && confirmed == val ? true : false;
    },
  },
};
</script>

<style scoped>
.show-btn {
  color: white;
  font-weight: bolder;
  background-color: #0088ff;
}
.width {
  width: 120px;
}
#navbar {
  position: absolute;
  z-index: -1;
  top: 40px;
}
.navbar-brand img {
  height: 50px;
  width: 150px;
}

.nav-item :hover {
  background-color: #d2d6d9;
  border-radius: 5px 5px;
}
.navbar-nav li {
  padding: 0 15px;
}
.navbar-nav li a {
  font-size: 22px;
  font-weight: bold;
  color: #0088ff !important;
}
</style>

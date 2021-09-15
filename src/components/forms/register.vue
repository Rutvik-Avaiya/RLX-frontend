<template>
  <div class="main">
    <section class="signup">
      <!-- <img src="images/signup-bg.jpg" alt=""> -->
      <div class="container">
        <div class="signup-content text-left">
          <form method="POST" class="signup-form">
            <h2 class="form-title">Register here</h2>
            <div class="form-group">
              <input
                type="text"
                v-model="inputs.projectname"
                class="form-input"
                name="projectname"
                placeholder="Your Project Name"
              />
              <div v-if="!projectname">
                <span class="text-danger">Please enter your project name</span>
              </div>
            </div>
            <div class="form-group">
              <input
                type="text"
                v-model="inputs.domain"
                class="form-input"
                name="domain"
                placeholder="Domain"
              />
              <div v-if="!domain">
                <span class="text-danger">Invalid domain </span>
              </div>
            </div>
            <div class="form-group">
              <input
                type="text"
                v-model="inputs.slack_token"
                class="form-input"
                name="slack_token"
                placeholder="Slack token"
              />
              <div v-if="!token">
                <span class="text-danger">Invalid token</span>
              </div>
            </div>
            <!-- <div class="form-group">
              <input
                type="text"
                v-model="inputs.channel"
                class="form-input"
                name="channel"
                placeholder="Slack channel"
              />
              <div v-if="!channel">
                <span class="text-danger">Please enter channel</span>
              </div>
            </div> -->

            <div class="form-group">
              <input
                type="button"
                @click="authenticateregister"
                class="form-submit"
                value="Register"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>


<script>
import axios from "axios";
//import login from "./components/login"
export default {
  name: "register",
  data() {
    return {
      inputs: {
        projectname: "abc",
        domain: "dxfghj.com",
        slack_token:
          "xoxb-1418541820036-1436233430048-0ud-wn-5-fx-ienb-s-vzmp-b29p-anb",
        // channel: "1234567",
      },
    };
  },
  methods: {
    authenticateregister() {
      const { projectname, domain, slack_token } = this.inputs;

      if (!(projectname || domain || slack_token)) {
        return;
      }

      //   this.$router.push({ path: "/welcome" });
      //   this.$router.push({ name: "welcome" });

      axios
        .post("http://192.168.0.19:1337/projects", {
          data: {
            projectname: projectname,
            domain: domain,
            slack_token: slack_token,
          },
          headers:
          {
            'authorization': " Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjE0Njc5NDc4LCJleHAiOjE2MTcyNzE0Nzh9.ZpYMrPr05CQCzOKKoyJmM7zxcPeaIPm5L3qdGAorssA"
          },

          // channel: channel,
        })
        .then((data) => {
          console.log(data);
        })
        .catch((e) => console.log(e));
    },
  },


  computed: {
    projectname() {
      const { projectname } = this.inputs;
      return projectname && projectname.length > 0 ? true : false;
    },
    domain() {
      const { domain } = this.inputs;
      const domainRegx = /^(?!:\/\/)(?=.{1,255}$)((.{1,63}\.){1,127}(?![0-9]*$)[a-z0-9-]+\.?)$/;
      return domain && domainRegx.test(domain) ? true : false;
    },
    // channel() {
    //   const { channel } = this.inputs;
    //   return channel && channel.length > 0 ? true : false;
    // },
    token() {
      const { slack_token } = this.inputs;
      const bregx = /^(xoxb-)/;
      return slack_token && bregx.test(slack_token) ? true : false;
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
<template>
  <div>
    <div class="toggle">
      <i class="fas fa-bars"></i>
    </div>
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <!-- <a class="nav-link " href="#">Login</a> -->
                <b-button name="addprojectbtn " @click="addproject" class="show-btn width">
                  <i class="fa fa-user-plus" aria-hidden="true"></i> Add
                  Projects</b-button >
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <!-- <v-toolbar> <img src="require('../assets/logo1.png')"> </v-toolbar> -->
      <div id="sidebar-wrapper">
        <ul class="sidebar-nav">
          <li><a href="#"> Projects</a></li>
          <li><a href="#"> MyAccount</a></li>
        </ul>
      </div>
    </div>
    

    <!-- <div class="table">
      <b-table striped hover :items="items"></b-table>

</div> -->
    <div id="table">
      <div v-if="error">
        {{ error }}
      </div>
      <ul v-else>
        <li v-for="project in projects" :key="project.id">
          {{ project.slck_token }}
        </li>
      </ul>
    </div>
  </div>
</template>


<style scoped>
.toggle{
  margin-left: 500px;
}
.table {
  margin-left: 130px;
}
.show-btn {
  color: white;
  font-weight: bolder;
  background-color: #0088ff;
}
.width {
  width: 180px;
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
  font-size: 0px;
  font-weight: bold;
  color: black !important;
}
.logo {
  background: white;
  height: 60px;
}
#wrapper {
  padding-left: 250px;
  transition: all 0.4s ease 0s;
}

#sidebar-wrapper {
  margin-left: -250px;
  left: 250px;
  width: 250px;
  background: #000;
  position: fixed;
  height: 100%;
  overflow-y: auto;
  z-index: 1000;
  transition: all 0.4s ease 0s;
}

#page-content-wrapper {
  width: 100%;
}

.sidebar-nav {
  position: absolute;
  top: 0;
  width: 250px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.sidebar-nav li {
  line-height: 40px;
  text-indent: 20px;
}

.sidebar-nav li a {
  color: #999999;
  display: block;
  text-decoration: none;
}

.sidebar-nav li a:hover {
  color: #fff;
  background: rgba(255, 255, 255, 0.2);
  text-decoration: none;
}

.sidebar-nav li a:active,
.sidebar-nav li a:focus {
  text-decoration: none;
}

.sidebar-nav > .sidebar-brand {
  height: 65px;
  line-height: 60px;
  font-size: 18px;
}

.sidebar-nav > .sidebar-brand a {
  color: #999999;
}

.sidebar-nav > .sidebar-brand a:hover {
  color: #fff;
  background: none;
}

.content-header {
  height: 65px;
  line-height: 65px;
}

.content-header h1 {
  margin: 0;
  margin-left: 20px;
  line-height: 65px;
  display: inline-block;
}

#menu-toggle {
  display: none;
}

.inset {
  padding: 20px;
}

@media (max-width: 767px) {
  #wrapper {
    padding-left: 0;
  }

  #sidebar-wrapper {
    left: 0;
  }

  #wrapper.active {
    position: relative;
    left: 250px;
  }

  #wrapper.active #sidebar-wrapper {
    left: 250px;
    width: 250px;
    transition: all 0.4s ease 0s;
  }

  #menu-toggle {
    display: inline-block;
  }

  .inset {
    padding: 15px;
  }
}
</style>
<script>
import axios from "axios";
// import Vue from "vue";
// Vue.use(axios)
export default {
  name: "welcome",

  data() {
    return {
      projects: [],
      error: null,
    };
  },
  methods:
  {
    addproject()
    {
       this.$router.push({ path: "/register" });
      this.$router.push({ name: "register" });
    },
  mounted() {
    axios
      .get("http://192.168.0.21:1337/project")
      .then((res) => (this.projects = res.data))
      .catch((e) => (this.error = e));
  },
  }


  // async mounted(){

  //   try{
  //     const response=await axios.get('http://192.168.0.17:1337/project')
  //     console.log(response)
  //     this.projects=response.data

  //   }
  //   catch(e){
  //     this.error=e;
  //   }
  // }

};
</script>
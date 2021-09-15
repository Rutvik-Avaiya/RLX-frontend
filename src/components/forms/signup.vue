<template>
    <div class="main" id="signup" >

        <section class="signup">
           
            <div class="container">
                <div class="signup-content text-left">
                    <form method="POST"  id="signup-form" class="signup-form" action="http://192.168.0.22:1337/dev-accounts">
                        <h2 class="form-title">Create account</h2>
                        <div class="form-group">
                            <input type="text"  v-model="inputs.uname" class="form-input" name="uname" id="name" placeholder="Your Name" />
                             <div v-if="!uname">
                                <span class="text-danger">Please fill this field</span>
                            </div> 
                        </div>
                        <div class="form-group">
                            <input type="email" v-model="inputs.email" class="form-input"  name="email" id="email" placeholder="Your Email" required/>
                             <div v-if="!email">
                                <span class="text-danger">Invalid email</span>
                            </div>
                        </div>
                        <div class="form-group">
                            <input type="password" v-model="inputs.password" class="form-input" name="password" id="password" placeholder="Password"/>
                             <div v-if="!password">
                                <span class="text-danger">Invalid password</span>
                            </div> 
                        </div>
                        <div class="form-group">
                            <input type="password" v-model="inputs.confirmpassword" class="form-input" name="re_password"  id="re_password" placeholder="Confirm your password" onkeyup="check();" required/>
                            <div v-if="!confirmpassword">
                                <span class="text-danger">Password doesn't match</span>
                            </div> 
                        </div>                        
                        <div class="form-group">
                            <input type="submit"  @click="authenticate" id="submit"  class="form-submit" value="Sign up"/>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
import { axios } from "axios";
//import login from "./components/login"
export default {
    name:"signup",
      data(){
        return {
            inputs: {
                uname:null,
                email: null,
                password: null,
                confirmpassword:null
            }
        }
    },
    methods: {
        authenticate() {
            if(!(this.email || this.password || this.uname || this.confirmpassword)){
                return 
            }
       
        axios.post('https//192.168.0.22:1337/dev-acoount/',
         {
            uname : 'this.uname',
            email : 'this.email'    
         }) 
        }
    },
    computed: {
        uname(){
            const { uname } = this.inputs;
            return uname && uname.length > 0 ? true : false;
        },
        email(){
            const { email } = this.inputs;
            const emailRegx = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
            return email && emailRegx.test(email) ? true : false;
        },
        password(){
            const { password } = this.inputs;
            return password && password.length > 7 ? true:false;
        },
        confirmpassword(){
            const { password } = this.inputs;
            const { confirmpassword } = this.inputs;
            return confirmpassword && confirmpassword == password ? true : false;
        }
    }
}
</script>

<style scoped>
    .text-left{
        text-align: left;
    }

    .text-danger{
        color: red;
    }
</style>
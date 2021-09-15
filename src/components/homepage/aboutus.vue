<template>
      <div class="aboutus" id="aboutus">
        <div>
            <h1> About us</h1>
        </div>
        <br>
        <div class="contentabout">
            <p>The remote logger named (RLx Remote Logging extension) is a simple, robust, minimal and configurable
                library that provides/solves the problem. It will capture the JavaScript application bugs along with
                stack-trace and send them to developer collaborative channels such as slack. In the golden era of
                development automation, RLx automates the process of debugging effectively.


                In debugging, having a complete log of crash including stack trace is essential to debug and fix the
                issue. It would be beneficial if we get the log in Realtime that’s going to be collaborated/assigned
                to the developer team.</p>
        </div>
        <br>
        <br>


    </div>
</template>
<script>
export default {
    name:'aboutus'
}
</script>
<style scoped>
.aboutus h1{
  font-size:40px; font-weight:700;  letter-spacing:1px; text-transform:uppercase; 
  text-align: center;
  margin:auto;
  white-space:nowrap; padding-bottom:13px;
}
.aboutus h1::before{
  background-color: #0088ff;
  content: '';
  display: block;
  height: 3px;
  margin-left: 230px;
  width: 100px;
  margin-bottom: 5px;
}
.aboutus h1::after{
  background-color: #0088ff;
  content: '';
  display: block;
  position:absolute;
  margin-left: 325px; 
  height: 3px;
  width: 100px;
  margin-bottom: 0.25em;

}
.aboutus
{
  display: flex;
flex-direction: column;
width: 650px;
font-family: sans-serif;
text-align: center;
margin-left: 300px;
}

.contentabout
{
  margin-left: 10px;
  text-align: justify;
  font-size: 20px;
  width: fit-content;
}
</style>
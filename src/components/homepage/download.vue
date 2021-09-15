<template>
    <div class="download" id="download">
        <div>
            <h1> How to Download liabrary?</h1>
        </div>
        <br>
        <div class="contentdownload">
            <p >1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam, laborum.<br>
                2> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi, velit.<br>

                3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, ut.</p>
        </div>
        <br>
        <br>
    </div>
</template>
<script>
export default {
    name:'download'
}
</script>
<style scoped>
.download h1{
  font-size:40px; font-weight:700;  letter-spacing:1px; text-transform:uppercase; 
  text-align: center;
  margin:auto;
  white-space:nowrap; padding-bottom:13px;
}
.download h1::before{
  background-color: #0088ff;
  content: '';
  display: block;
  height: 3px;
  width: 300px;
  margin-bottom: 5px;
}
.download h1::after{
  background-color: #0088ff;
  content: '';
  display: block;
  position:absolute;
  margin-left: 350px; 
  height: 3px;
  width: 300px;
  margin-bottom: 0.25em;
}
.download
{
  display: flex;
flex-direction: column;
width: 650px;
text-align: center;
margin-left: 300px;

}

.contentdownload
{
  margin-left: 10px;
  text-align: justify;
  font-size: 20px;
  font-family: sans-serif;
  width: fit-content;
}

</style>
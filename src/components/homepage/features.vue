<template>
    <div class="wrapper" id="features">
        <h4>Features</h4>
        <div>
            <h1> <img src="https://img.icons8.com/nolan/64/sales-channels.png" />Multi-channel Collaboration</h1>
        </div>
        <div class="content">

            <i class="fa fa-chevron-right" aria-hidden="true"></i>

            collaboration supported with customization.<br>
            <i class="fa fa-chevron-right" aria-hidden="true"></i>

            System will work in real-time to dispatch the debug information &nbsp;&nbsp; to chat channels.
        </div>
        <br>
        <div>
            <h1> <img src="https://img.icons8.com/color/48/000000/slack.png" />
                SLACK Collaboration</h1>
            <div class="content"> <i class="fa fa-chevron-right" aria-hidden="true"></i>

                Slack is a new way to communicate with your team. It's faster, &nbsp; &nbsp; &nbsp;&nbsp; better
                organised and more
                secure than email.<br>
                <i class="fa fa-chevron-right" aria-hidden="true"></i>

                Teams and workplaces can be used across multiple devices and &nbsp;&nbsp; platforms, and is equipped
                with robust features.

            </div>
        </div>
        <br>
        <br>
        <br>
    </div>
    
</template>
<script>
export default {
    name:'features'
}
</script>
<style scoped>

.wrapper h4
{
  font-size:40px; font-weight:700;  letter-spacing:1px; text-transform:uppercase; 
  text-align: center;
  margin:auto;
  white-space:nowrap; padding-bottom:13px;
}
.wrapper h4::before
{
  background-color: #0088ff;
  content: '';
  display: block;
  height: 3px;
  width: 100px;
  margin-bottom: 5px;

}
.wrapper h4::after
{
  background-color: #0088ff;
  content: '';
  display: block;
  position:absolute;
  margin-left: 100px; 
  height: 3px;
  width: 100px;
  margin-bottom: 0.25em;

}
.wrapper h1{
  font-size: 30px;
}



.wrapper
{
    margin-top: 60px;
display: flex;
flex-direction: column;
width: 650px;
text-align: center;
text-align: justify;
margin-left: 300px;
}


.content{
    margin-left: 60px;
    text-align: justify;
    font-size: 20px;
    width: 650px;
  }

</style>
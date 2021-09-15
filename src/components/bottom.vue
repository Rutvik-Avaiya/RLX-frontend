<template>
    <footer class="footer-outer">
        <div class="container footer-inner">

            <div class="footer-three-grid wow fadeIn animated" data-wow-delay="0.66s">
                <div class="column-1-3">

                </div>
                <div class="column-2-3">
                    <nav class="footer-nav">
                        <ul>
                            <a href="#navbarNav">
                                <li>Home</li>
                            </a>
                            <a href="#features">
                                <li>Features</li>
                            </a>
                            <a href="#download">
                                <li>Download</li>
                            </a>

                        </ul>
                    </nav>
                </div>
                <div class="column-3-3">

                </div>
            </div>

            <span class="border-bottom-footer"></span>


            <p class="copyright">&copy; 2020 RLX. All rights reserved. Design by Team RLX
            </p>

        </div>
    </footer>

</template>
<script>
export default {
    name : 'bottom'
}
</script>
<style scoped>
.footer-outer {
    width: 100%;
    padding: 130px;
    padding-top: 50px;
    
    height: 200px;
    background:#f8f9fa;
    overflow: hidden;
  }
  .footer-outer .footer-inner {
    width: 100%;
    height: inherit;
  }
  .footer-outer .social-icons-footer i {
    margin: 15px;
    font-size: 20px;
  }
  .footer-outer .social-icons-footer a:hover i {
    opacity: .6;
    -webkit-transition: all .2s ease;
    -moz-transition: all .2s ease;
    -o-transition: all .2s ease;
    -ms-transition: all .2s ease;
    transition: all .2s ease;
  }
  .footer-outer .footer-three-grid {
    width: 1140px;
    margin: 0 auto;
    height: 50px;
    text-align: center;
  }
  .footer-outer .column-1-3 {
    width: 20%;
    float: left;
    height: 50px;
  }
  .footer-outer .column-1-3 h1 {
    font-size: 38px;
    letter-spacing: 3px;
    position: relative;
    top: -5px;
    font-weight: 600;
    color: #fff;
  }
  .footer-outer .column-2-3 {
    width: 60%;
    float: left;
    height: 50px;
  }
  .footer-outer .column-3-3 {
    width: 20%;
    float: left;
    height: 50px;
  }
  .footer-outer .column-3-3 a {
    color: #b5b5c8;
  }
  .footer-outer .column-3-3 .social-icons-header a:hover {
    color: #fff;
    opacity: 1;
    -webkit-transition: color .2s ease;
    -o-transition: color .2s ease;
    transition: color .2s ease;
  }
  .footer-outer .footer-nav ul {
    list-style: none;
text-align: justify;
  }
  .footer-outer .footer-nav ul li {
    display: inline-block;
    line-height: 50px;
    color: #0088ff;
    font-weight: bold;
  margin-left: 60px;  
    font-size: 25px;
  }
  .footer-outer .footer-nav ul li:hover {
    -webkit-transition: color .2s ease-in-out;
    background-color: #d2d6d9;
    border-radius:5px 5px;
    -o-transition: color .2s ease-in-out;
    transition: color .2s ease-in-out;
  }
  .footer-outer .footer-nav ul .active {
    color: #fff;
  }
  .footer-outer .footer-nav ul li a {
    color: #fff;
    text-decoration: none;
  }
  .footer-outer .border-bottom-footer {
    height: 1px;
    width: 60%;
    margin: 0 auto;
    border: 1px solid #434769;
    display: block;
    margin-top: 50px;
  }
  .footer-outer .copyright {
    color: #0088ff;
    text-align: center;
    font-size: 13px;
    
  }
  
  

.ml-auto, .mx-auto {
    margin-left: auto!important;
}   
</style>

<template>
    <div class="main" id="signup">

        <section class="signup">
           
            <div class="container">
                <div class="signup-content">
                    <form method="POST"  onsubmit="return validate()" enctype="application/x-www-form-urlencoded" id="signup-form" class="signup-form" action="http://localhost:1337/dev-accounts">
                        <h2 class="form-title">Create account</h2>
                        <div class="form-group">
                            <input type="text"  class="form-input" name="uname" id="name" placeholder="Your Name" required/>
                        </div>
                        <div class="form-group">
                            <input type="email" class="form-input"  name="email" id="email" pattern="^[\\w-_\\.+]*[\\w-_\\.]\\@([\\w]+\\.)+[\\w]+[\\w]$"
                            placeholder="Your Email" required/>
                        </div>
                        <div class="form-group">
                            <input type="password" class="form-input" name="password" id="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" onkeyup="check();" required placeholder="Password"/>
                            <span toggle="#password" class="zmdi zmdi-eye field-icon toggle-password"></span>
                        </div>
                        <div class="form-group">
                            <input type="password" class="form-input" name="re_password"  id="re_password" placeholder="Confirm your password" onkeyup="check();" required/>
                            <span id='message'></span>
                        </div>                        
                        <div class="form-group">
                            <input type="submit" name="submit" id="submit"  class="form-submit" value="Sign up"/>
                        </div>
                    </form>
                   

                     <!-- <p class="loginhere">
                            Have already an account ? 
                    </p>  -->
    
                </div>
            </div>
        </section>

    </div>
    
</template>


<template>
    <div class="main" id="login">

        <section class="signup">
            <!-- <img src="images/signup-bg.jpg" alt=""> -->
            <div class="container">
                <div class="signup-content">
                    <form method="POST" id="login-form" class="signup-form">
                        <h2 class="form-title">Login here</h2>
                        <div class="form-group">
                            <input type="email" class="form-input" name="email" id="email" placeholder="Your Email" required/>
                        </div>
                        <div class="form-group">
                            <input type="password" class="form-input" name="password" id="password" placeholder="Password" required/>
                            <span toggle="#password" class="zmdi zmdi-eye field-icon toggle-password"></span>
                        </div>
                        <div class="form-group">
                            <input type="submit" name="login" id="submit" formaction="welcome.html" class="form-submit" value="Login"/>
                        </div>
                    </form>
                </div>
            </div>
        </section>

    </div>
</template>

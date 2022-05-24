class Header extends HTMLElement {
    constructor() {
      super();
    }
  
connectedCallback() {
    this.innerHTML = `    
        <!-- ____________________ Nav Bar ____________________  -->
        <div class="navHeader">
        <nav class="navbar navbar-expand ">
            <div class="container-fluid">
                <a class="navbar-brand" href="home.html">
                    <img class="logo" src="public/logo/HeartLogo@3x.png" height="100px">
                </a>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <div class="navbar-nav ms-auto">

                        <div class="nav-item" id="account">
                            <a class="nav-link login-link" id="login" data-bs-toggle="modal" href="#login-modal" >Login &nbsp;
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#0C6275" class="bi bi-person-circle" viewBox="0 0 16 16">
                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                                </svg>
                            </a>
                        </div>

                        <div class="nav-item" id="cart">
                        <a class="nav-link" href="cart.html"><img class="cartIcon" src="public/icons/Cart@3x.png "  height="22px"></a>                    
                        </div>

                        <div class="nav-item dropdown" id="menu">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#0C6275" class="bi bi-list" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                                </svg> 
                            </a>

                            <div class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
                                <h3 class="menuHeader">Shopping</h3>
                                <a class="dropdown-item" href="alcohol.html">Alcohol Inks</a>
                                <a class="dropdown-item" href="digital.html">Digital Art</a>
                                <a class="dropdown-item" href="paintings.html">Paintings</a>
                                <br>

                                <h3 class="menuHeader">My Items</h3>
                                <a class="dropdown-item" href="cart.html">Cart</a>
                                <a class="dropdown-item" href="wishlist.html">Wishlist</a>
                                <br>

                                <h3 class="menuHeader">Information</h3>
                                <a class="dropdown-item" href="about.html">About</a>
                                <a class="dropdown-item" href="contact.html">Contact Me</a>
                                <a class="dropdown-item" href="reviews.html">Reviews</a>
                                <a class="dropdown-item" href="shipping.html">Shipping</a>
                                <a class="dropdown-item" href="supportSmall.html">Support Small</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        </div> 
        
        <!-- _______________ Login Modal _______________ -->
        <div class="modal" id="login-modal" tabindex="-1">
            <div class="modal-dialog ">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="btn-close d-flex justify-content-end
                        " data-bs-dismiss="modal" aria-label="Close"></button>
                        <h3 class="modal-title">Welcome Back!</h3>
                        <p class="modal-subTitle"><b>Please sign in.</b></p>
                        <p class="modal-sub-subTitle">If you don't already have an account you can signup <a class="a-alt" href="#signup-modal" data-bs-toggle="modal">here</a></p>
                        <p class="err-msg"></p>
                    </div>
                    <div class="modal-body">
                        <form action="" class="loginForm" method="post">
        
                            <div class="username">
                                <label class="formInputs">Email:</label><br>
                                <input type="email" placeholder="" class="formInputs" name="user" required>
                            </div>
                        
                            <div class="password d-inline-block">
                                <label id="pass-label" class="formInputs">Password:</label><br>
                                <input type="password" placeholder="" class="formInputs" name="pass" required>
                            </div>

                            <button type="submit" class="btn-secondary login-btn d-inline">Login</button>
                        
                            <div class="" >
                                <p class="forgot"><a class="one" href="#forgot-modal"  data-bs-toggle="modal">Forgot Password?</a></p>       
                            </div>

                            <div class="cancel d-flex justify-content-end">
                                <button type="button" class="cancel-btn" data-bs-dismiss="modal">Cancel</button> 
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>  

        <!-- _______________ Signup Modal _______________ -->
        <div class="modal" id="signup-modal" tabindex="-1">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="btn-close d-flex justify-content-end
                        " data-bs-dismiss="modal" aria-label="Close"></button>
                        <h3 class="modal-title">Welcome!</h3>
                        <p class="modal-subTitle">Please fill out the information below to create your account and start adding to your wishlist.</p>
                    </div>
                    <div class="modal-body">
                        <form action="" class="loginForm" method="post">
        
                            <div class="signup-email">
                                <label class="formInputs">Email:</label><br>
                                <input type="email" placeholder="" class="formInputs" name="user" required>
                            </div>
                        
                            <div class="signup-pass d-inline-block">
                                <label id="pass-label" class="formInputs">Password:</label><br>
                                <input type="password" placeholder="" class="formInputs" name="pass" required>
                            </div>
                        
                            <div class="signup-pass-repeat d-inline-block">
                                <label id="pass-label" class="formInputs">Confirm Password:</label><br>
                                <input type="password" placeholder="" class="formInputs" name="pass-repeat" required>

                                <button type="submit" class="btn-secondary signup-btn">Signup</button>
                            </div>
                        
                            <div class="" >
                                <p class="terms"><a class="one" href="#terms-modal" data-bs-toggle="modal">Terms & Conditions</a></p>       
                            </div>

                            <div class="cancel d-flex justify-content-end">
                                <button type="button" class="cancel-btn" data-bs-dismiss="modal">Cancel</button> 
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>

        <!-- _______________ Forgot Password Modal _______________ -->
        <div class="modal" id="forgot-modal" tabindex="-1">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="btn-close d-flex justify-content-end
                        " data-bs-dismiss="modal" aria-label="Close"></button>
                        <h3 class="modal-title">Password Reset</h3>
                        <p class="reset-msg">
                            <!-- If the username provided matches our records you will recieve a reset code by email shortly. -->
                        </p>
                    </div>
                    <div class="modal-body">
                        <form action="" class="resetForm" method="post">
        
                            <div class="reset-username">
                                <label class="formInputs">Username:</label><br>
                                <input type="email" placeholder="" class="formInputs" name="user" required>

                                <button type="button" class="request-btn">Request</button> 
                            </div>

                        </form>

                        <form>

                            <hr class="reset-divider">
                        
                            <div class="new-pass">
                                <label id="pass-label" class="formInputs">New Password:</label><br>
                                <input type="password" placeholder="" class="formInputs" name="pass" required>
                            </div>
                        
                            <div class="new-pass-repeat d-inline-block">
                                <label id="pass-label" class="formInputs">Confirm New Password:</label><br>
                                <input type="password" placeholder="" class="formInputs" name="pass-repeat" required>
                            </div>
                        
                            <div class="reset-code d-inline-block" >
                                <label id="pass-label" class="formInputs">Reset Code:</label><br>
                                <input type="text" placeholder="" class="formInputs" name="pass-repeat" required>      
                            </div>

                            <div class="reset-btns">
                                <div class="cancel d-inline-block">
                                    <button type="button" class="terms-cancel-btn" data-bs-dismiss="modal">Cancel</button> 
                                </div>
            
                                <div class="submit d-inline-block d-flex justify-content-end">
                                    <button type="button" class="submit-btn" >Submit</button> 
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>

        <!-- _______________ Terms & Conditions Modal _______________ -->
        <div class="modal" id="terms-modal" tabindex="-1">
            <div class="modal-dialog ">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="btn-close d-flex justify-content-end
                        " data-bs-dismiss="modal" aria-label="Close"></button>
                        <h3 class="modal-title">Terms & Conditions.</h3>
                        <p class="modal-subTitle">Please review carefully. Once you have read through the information please hit accept to continue with account creation.</p>
                    </div>
                    <div class="modal-body">
                        <div class="termsConditions">
                            
                            <p class="terms-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum non consectetur a erat nam at. Libero nunc consequat interdum varius sit amet mattis vulputate enim. Eu non diam phasellus vestibulum lorem sed risus. Praesent semper feugiat nibh sed pulvinar proin. Fames ac turpis egestas maecenas pharetra convallis posuere. Ipsum faucibus vitae aliquet nec. Id porta nibh venenatis cras sed felis. Urna condimentum mattis pellentesque id nibh tortor id aliquet. Quam adipiscing vitae proin sagittis nisl rhoncus. Faucibus nisl tincidunt eget nullam non nisi est sit.
                            <br><br>
                            A lacus vestibulum sed arcu. Nibh praesent tristique magna sit amet purus gravida quis. Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam. Tristique et egestas quis ipsum suspendisse ultrices gravida. Posuere ac ut consequat semper viverra. Netus et malesuada fames ac turpis egestas. Metus aliquam eleifend mi in nulla. Sodales ut etiam sit amet nisl. Velit laoreet id donec ultrices tincidunt. Quam quisque id diam vel quam elementum pulvinar etiam non. Bibendum neque egestas congue quisque egestas diam in arcu. Dignissim suspendisse in est ante in.
                            <br><br>
                            Vel fringilla est ullamcorper eget nulla facilisi. Penatibus et magnis dis parturient montes nascetur ridiculus mus mauris. Non tellus orci ac auctor augue mauris. Egestas pretium aenean pharetra magna ac placerat vestibulum lectus. Arcu cursus vitae congue mauris rhoncus aenean vel. Id consectetur purus ut faucibus. Sit amet venenatis urna cursus eget nunc scelerisque viverra mauris. Justo nec ultrices dui sapien eget mi proin. Id eu nisl nunc mi. Ut venenatis tellus in metus. Penatibus et magnis dis parturient. Dignissim sodales ut eu sem. Donec ac odio tempor orci dapibus ultrices. Sapien pellentesque habitant morbi tristique senectus et netus et. Lacus viverra vitae congue eu consequat ac felis donec. Nunc faucibus a pellentesque sit amet porttitor. Adipiscing vitae proin sagittis nisl rhoncus. Sem nulla pharetra diam sit.</p>
                            
                        </div>

                        <div class="terms-btns">
                            <div class="cancel d-inline-block">
                                <button type="button" class="terms-cancel-btn" data-bs-dismiss="modal">Cancel</button> 
                            </div>
        
                            <div class="accept d-inline-block d-flex justify-content-end">
                                <button type="button" class="accept-btn">Accept</button> 
                            </div>
                        </div>
                    
                    </div>
                </div>
            </div>
        </div>
        `;
    }
}
customElements.define('header-component', Header);
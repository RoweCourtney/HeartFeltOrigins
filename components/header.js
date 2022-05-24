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
                            <a class="nav-link login-link" href="login.html">Login &nbsp;
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#0C6275" class="bi bi-person-circle" viewBox="0 0 16 16">
                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                                </svg>
                            </a>
                        </div>

                        <div class="nav-item" id="cart">
                        <a class="nav-link" href="#"><img class="cartIcon" src="public/icons/Cart@3x.png "  height="22px"></a>                    
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
        `;
    }
}
customElements.define('header-component', Header);
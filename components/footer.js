class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
connectedCallback() {
    this.innerHTML = `    
        <p class="copyright"><i class="far fa-copyright"></i> Copyright 2020 
        <script>new Date().getFullYear()>2020&&document.write("-"+ new Date().getFullYear());</script> 
        | Heart Felt Origins
        </p>           
        `;
    }
}
customElements.define('footer-component', Footer);
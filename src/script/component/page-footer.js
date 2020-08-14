class PageFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <style>
            #footer-content {
                background-color: #0e1013;
                width: 100%;
                text-align: center;
                color: white;
            }
        </style>
        
        <div class="p-2" id="footer-content">
            <span>Copyright &copy; 2020 Shidqi Maulana</span>
        </div>`;
    }
}

customElements.define("page-footer", PageFooter);

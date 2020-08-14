import "./search-bar.js";
import "./header-navigation.js";

class PageHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <style>
            .header-content {
                background-color: #0e1013;
                line-height: 1;
                padding: 2rem;
            }

            .header-container{
                display: flex;
                flex-direction: row;
            }

            .page-logo {
                font-family: "Playfair Display", Georgia, "Times New Roman", serif;
                font-size: 3rem;
                flex-basis: 30%;
                text-align: center;
            }

            search-bar{
                flex-basis: 60%;
            }

            .page-logo:hover {
                text-decoration: none;
            }

            @media screen and (max-width: 480px) {
                .header-container{
                flex-direction: column;
                }
                .page-logo {
                margin-bottom: 1rem;
                }
            }
        </style>
        
        <div class="header-content">
            <div class="header-container">
                <a class="page-logo text-white" href="#">Warta</a>
                <search-bar></search-bar>
            </div>
            <header-navigation></header-navigation>
        </div>`;
    }
}

customElements.define("page-header", PageHeader);

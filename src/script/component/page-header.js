import "./search-bar.js";
import "./header-navigation.js";

class PageHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <style>
            .text-muted{
            color: white !important;
            }

            .page-header {
                background-color: #0e1013;
                line-height: 1;
                padding: 2rem;
            }

            .header-container{
                display: flex;
                flex-direction: row;
            }

            .page-header-logo {
                font-family: "Playfair Display", Georgia, "Times New Roman", serif;
                font-size: 3rem;
                flex-basis: 30%;
                text-align: center;
            }

            search-bar{
                flex-basis: 60%;
            }

            .page-header-logo:hover {
                text-decoration: none;
            }

            @media screen and (max-width: 480px) {
                .header-container{
                flex-direction: column;
                }
                .page-header-logo {
                margin-bottom: 1rem;
                }
            }
        </style>
        
        <header class="page-header">
            <div class="header-container">
                <a class="page-header-logo text-muted" href="#">Warta</a>
                <search-bar></search-bar>
            </div>
            <header-navigation></header-navigation>
        </header>`;
    }
}

customElements.define("page-header", PageHeader);

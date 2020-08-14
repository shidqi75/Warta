class PageLoader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <style>
            .loader {
                color: #fff;
                position: fixed;
                z-index: 3;
                background-color: rgba(0, 0, 0, 0.4);
                width: 100%;
                height: 100%;
            }

            @keyframes rotation {
                0% {
                    transform: rotate(0);
                }

                to {
                    transform: rotate(359deg);
                }
            }

            .loader:after {
                content: "";
                position: fixed;
                width: 40px;
                height: 40px;
                border: 4px solid #fff;
                border-left-color: transparent;
                border-radius: 50%;
                top: calc(50% - 20px);
                left: calc(50% - 20px);
                animation: rotation 1s linear infinite;
            }
        </style>
        
        <div
            class="loader"
            style="display: none;"
        ></div>`;
    }
}

customElements.define("page-loader", PageLoader);

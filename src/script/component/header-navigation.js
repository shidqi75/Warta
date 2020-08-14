class HeaderNavigation extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <style>

            .nav-scroller {
            z-index: 2;
            height: 2.75rem;
            border-bottom: 1px solid #e5e5e5;
            }

            .nav-scroller .nav {
            display: -ms-flexbox;
            display: flex;
            -ms-flex-wrap: nowrap;
            flex-wrap: nowrap;
            padding-bottom: 1rem;
            margin-top: -1px;
            overflow-x: auto;
            text-align: center;
            white-space: nowrap;
            -webkit-overflow-scrolling: touch;
            }

            .nav-scroller .nav-link {
            padding-top: .75rem;
            padding-bottom: .75rem;
            font-size: .875rem;
            }
        </style>

        <div class="nav-scroller sticky-top py-1 mt-3 mb-2">
            <nav class="nav d-flex justify-content-between">
                <a class="p-2 text-white category" href="#">Business</a>
                <a class="p-2 text-white category" href="#">Entertainment</a>
                <a class="p-2 text-white category" href="#">Health</a>
                <a class="p-2 text-white category" href="#">Science</a>
                <a class="p-2 text-white category" href="#">Sports</a>
                <a class="p-2 text-white category" href="#">Technology</a>
            </nav>
        </div>`;
    }
}

customElements.define("header-navigation", HeaderNavigation);

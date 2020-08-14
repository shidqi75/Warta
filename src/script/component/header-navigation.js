class HeaderNavigation extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <style>
            .text-muted{
            color: white !important;
            }

            .nav-scroller {
            position: relative;
            z-index: 2;
            height: 2.75rem;
            overflow-y: hidden;
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

        <div class="nav-scroller py-1 mt-3 mb-2">
            <nav class="nav d-flex justify-content-between">
                <a class="p-2 text-muted category" href="#">Business</a>
                <a class="p-2 text-muted category" href="#">Entertainment</a>
                <a class="p-2 text-muted category" href="#">Health</a>
                <a class="p-2 text-muted category" href="#">Science</a>
                <a class="p-2 text-muted category" href="#">Sports</a>
                <a class="p-2 text-muted category" href="#">Technology</a>
            </nav>
        </div>`;
    }
}

// const categories = [
//     "business",
//     "entertainment",
//     "health",
//     "science",
//     "sports",
//     "technology",
// ];

customElements.define("header-navigation", HeaderNavigation);

/* <div class="nav-scroller py-1 mb-2">            <nav class="nav d-flex justify-content-between">
                <a class="p-2 text-muted" href="#">
                    <img src="/src/assets/images/business.svg" />Business</a
                >
                <a class="p-2 text-muted" href="#"
                    ><img
                        src="/src/assets/images/entertainment.svg"
                    /></span>Entertainment</a
                >
                <a class="p-2 text-muted" href="#"
                    ><img src="/src/assets/images/health.svg" />Health</a
                >
                <a class="p-2 text-muted" href="#"
                    ><img src="/src/assets/images/science.svg" />Science</a
                >
                <a class="p-2 text-muted" href="#"
                    ><img src="/src/assets/images/sports.svg" />Sports</a
                >
                <a class="p-2 text-muted" href="#"
                    ><img
                        src="/src/assets/images/technology.svg"
                    />Technology</a
                >
            </nav>
        </div> */

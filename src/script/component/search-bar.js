class SearchBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    get value() {
        return this.querySelector("#searchField").value;
    }

    render() {
        this.innerHTML = `
        <style>
                form {
                display:flex;
                flex-direction:row;
                border:1px solid grey;
                padding:2px;
                }

                input {
                flex-basis: 90%;
                padding-left: 1rem;
                border:none;
                }

                button {
                flex-basis: 10%;
                }

                input:focus {
                outline: none;
                }

                @media screen and (max-width: 350px) {
                .btn {
                padding: 0;
                }
            }
        </style>

        <form>
            <input placeholder="Search" id="searchField" type="search">
            <button class="btn btn-dark" id="searchButton" type="button"><svg  width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="mx-3" role="img" viewBox="0 0 24 24" focusable="false"><title>Search</title><circle cx="10.5" cy="10.5" r="7.5"/><path d="M21 21l-5.2-5.2"/></svg></button>
        </form>`;
        this.querySelector("#searchButton").addEventListener(
            "click",
            this._clickEvent
        );

        this.querySelector("#searchField").addEventListener("keyup", function (
            event
        ) {
            if (event.keyCode === 13) {
                event.preventDefault();
                document.getElementById("searchButton").click();
            }
        });
    }
}

customElements.define("search-bar", SearchBar);

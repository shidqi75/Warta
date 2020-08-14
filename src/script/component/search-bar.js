class SearchBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    get value() {
        return this.querySelector("#searchElement").value;
    }

    render() {
        this.innerHTML = `
        <style>
            form {
                /* This bit sets up the horizontal layout */
                display:flex;
                flex-direction:row;
                
                /* This bit draws the box around it */
                border:1px solid grey;

                /* I've used padding so you can see the edges of the elements. */
                padding:2px;
                }

                input {
                flex-basis: 90%;
                padding-left: 1rem;
                /* Tell the input to use all the available space */
                /* And hide the input's outline, so the form looks like the outline */
                border:none;
                }

                button {
                    flex-basis: 10%;
                }

                input:focus {
                /* removing the input focus blue box. Put this on the form if you like. */
                outline: none;
                }

                @media screen and (max-width: 350px) {
                .btn {
                    padding: 0;
                }
            }
        </style>

        <form>
            <input placeholder="Search" id="searchElement" type="search">
            <button class="btn btn-dark" id="searchButtonElement" type="button"><svg  width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="mx-3" role="img" viewBox="0 0 24 24" focusable="false"><title>Search</title><circle cx="10.5" cy="10.5" r="7.5"/><path d="M21 21l-5.2-5.2"/></svg></button>
        </form>`;
        // <span class="placeholder-icon" id="searchButtonElement"><svg  width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="mx-3" role="img" viewBox="0 0 24 24" focusable="false"><title>Search</title><circle cx="10.5" cy="10.5" r="7.5"/><path d="M21 21l-5.2-5.2"/></svg></span>
        this.querySelector("#searchButtonElement").addEventListener(
            "click",
            this._clickEvent
        );

        this.querySelector("#searchElement").addEventListener(
            "keyup",
            function (event) {
                // Number 13 is the "Enter" key on the keyboard
                // console.log(`${event.keyCode}`);
                if (event.keyCode === 13) {
                    // Cancel the default action, if needed
                    event.preventDefault();
                    // Trigger the button element with a click
                    document.getElementById("searchButtonElement").click();
                }
            }
        );

        // Get the input field
        // const input = document.getElementById("searchElement");

        // // Execute a function when the user releases a key on the keyboard
        // input.addEventListener("keyup", function (event) {
        //     // Number 13 is the "Enter" key on the keyboard
        //     if (event.keyCode === 13) {
        //         // Cancel the default action, if needed
        //         event.preventDefault();
        //         // Trigger the button element with a click
        //         document.getElementById("searchButtonElement").click();
        //     }
        // });
    }
}

customElements.define("search-bar", SearchBar);

// input[type="search"] {
//                 background-color: #f8f8f8;
//                 border: 0;
//             }

//             input[type="search"]::placeholder {
//                 font-size: 0.8rem;
//                 color: $gray-500;
//             }

//             .search-container {
//                 display: flex;
//             }

//             .search-container .form-control {
//                 padding: 0;
//                 padding-left: 3rem;
//             }

//             .search-container .placeholder-icon {
//                 position: absolute;
//                 z-index: 2;
//                 display: block;
//                 width: 3rem;
//                 height: 2.375rem;
//                 line-height: 2.375rem;
//                 text-align: center;
//                 pointer-events: none;
//                 color: $gray-500;
//             }

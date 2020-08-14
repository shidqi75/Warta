import "./news-item.js";

class NewsList extends HTMLElement {
    set news(items) {
        this._items = items;
        this.render();
    }

    render() {
        let i = 0;
        this.innerHTML = "";
        this.className = "row m-0";
        this._items.forEach((item) => {
            // console.log(`${i}`);
            // if (i % 3 == 0) this.innerHTML += "<div class='d-flex'>";
            // if (i % 3 == 2) this.innerHTML += "</div>";

            // if (i % 3 == 0){
            //     let x = document.createElement("div");
            //     x.setAttribute('class', 'd-flex')
            // }

            // i++;

            const NewsItemElement = document.createElement("news-item");
            NewsItemElement.news = item;
            this.appendChild(NewsItemElement);
        });
    }

    // this._items.forEach((item) => {
    //             index = index + 1;
    //             const NewsItemElement = document.createElement("news-item");
    //             NewsItemElement.news = item;
    //             this.appendChild(NewsItemElement);

    //             if (index % 3 == 0) item += '<div class="row-fluid">';

    //             item += '<div class="span3">Col 1</div>';

    //             if (index % 3 == 2) item += "</div>";
    //         });
    //         if (this._items.substr(-12) != "</div></div>") this._items += "</div>";

    renderError(message) {
        this.innerHTML = `
        <style>
            .placeholder {
                font-weight: lighter;
                color: rgba(0,0,0,0.5);
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
                text-align: center;
            }
        </style>`;
        this.innerHTML += `<h2 class="placeholder">${message}</h2>`;
    }
}

customElements.define("news-list", NewsList);

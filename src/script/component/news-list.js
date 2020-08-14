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
            const NewsItemElement = document.createElement("news-item");
            NewsItemElement.news = item;
            this.appendChild(NewsItemElement);
        });
    }

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

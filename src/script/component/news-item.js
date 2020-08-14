import DataSource from "../data/data-source.js";

class NewsItem extends HTMLElement {
    set news(item) {
        this._item = item;
        this.render();
    }

    render() {
        if (this._item.author == null) this._item.author = "Anonym";

        this.innerHTML = `
            <style>
            .card-wrapper{
                width: 30vw;
                margin: 1.4vw;
            }

            .card {
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                padding: 4px;
                width: 98%;
                height: 28rem; 
                background-color: white
                display: block;
                margin: auto;
            }

            .one-dots {
                overflow: hidden;
                display: inline-block;
                text-overflow: ellipsis;
                white-space: nowrap;
            }

            .three-dots {
                display: -webkit-box;
                -webkit-line-clamp: 3;
                -webkit-box-orient: vertical;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            @media screen and (max-width: 480px) {
                .card-wrapper{
                width: 95vw;
                margin: 2vw;
                }
            }
            </style>
            
            <div class="card-wrapper">
                <div class="border card">
                <img src="${this._item.urlToImage}" class="card-img-top" style="height: 13rem" alt="${this._item.title}">
                    <div class="col p-4 d-flex flex-column position-static">
                        <h5 class="mb-0 three-dots">${this._item.title}</h5>
                        <div class="mb-1 one-dots text-secondary">${this._item.author}</div>
                        <p class="card-text mb-auto three-dots">${this._item.description}</p>
                        <a href="${this._item.url}" class="stretched-link">Continue reading</a>
                    </div>
                </div>
            </div>
            `;
    }
}

customElements.define("news-item", NewsItem);

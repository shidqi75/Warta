import DataSource from "../data/data-source.js";

class NewsItem extends HTMLElement {
    set news(item) {
        this._item = item;
        this.render();
    }

    render() {
        if (this._item.author == null) this._item.author = "Anonym";
        /* <div class="row mb-2">
        <div class="col-md-6">
        <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div class="col p-4 d-flex flex-column position-static">
            <strong class="d-inline-block mb-2 text-primary">World</strong>
            <h3 class="mb-0">Featured post</h3>
            <div class="mb-1 text-muted">Nov 12</div>
            <p class="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
            <a href="#" class="stretched-link">Continue reading</a>
            </div>
            <div class="col-auto d-none d-lg-block">
            <svg class="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
            </div>
        </div>
        </div>
        <div class="col-md-6">
        <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div class="col p-4 d-flex flex-column position-static">
            <strong class="d-inline-block mb-2 text-success">Design</strong>
            <h3 class="mb-0">Post title</h3>
            <div class="mb-1 text-muted">Nov 11</div>
            <p class="mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
            <a href="#" class="stretched-link">Continue reading</a>
            </div>
            <div class="col-auto d-none d-lg-block">
            <svg class="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
            </div>
        </div>
        </div>
    </div>
</div> */

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

        // function myFunction(x) {
        //     if (x.matches) {
        //         document;
        //         // .getElementsByClassName("card")[0]
        //         // .setAttribute("style", "width:20rem;");
        //         // If media query matches
        //         document.body.style.backgroundColor = "yellow";
        //     } else {
        //         document.body.style.backgroundColor = "pink";
        //     }
        // }

        // // const y = document.getElementsByClassName("card");
        // let x = window.matchMedia("(max-width: 480px)");
        // myFunction(x); // Call listener function at run time
        // x.addListener(myFunction); // Attach listener function on state changes

        // <a href="${this._item.url}" class="btn btn-primary">Read More</a>
        // <a href="${this._item.url}">
        // <div class="card" style="width:18rem; height: 28rem">
        //     <img src="${this._item.urlToImage}" class="card-img-top" alt="${this._item.title}">
        //     <div class="card-body">
        //         <h5 class="card-title">${this._item.title}</h5>
        //         <i class="card-title">${this._item.author}</i>
        //         <p class="card-text">${this._item.description}</p>

        //     </div>
        // </div></a>
        // Sequenced Animation
        // let delay = 0;
        // $("[data-aos]").each(function () {
        //     if ($(this).is(":visible") == true) {
        //         delay = delay + 400;
        //         $(this).attr("data-aos-delay", delay);
        //     }
        // });

        // PreLoader Element
        // const loaderElement = document.querySelector("#loader-text");

        // Datasource Infromation News
        // const informationNews = async (id) => {
        //     loaderElement.style.display = "block";

        //     try {
        //         const result = await DataSource.informationNews(id);
        //         renderResult(result);
        //     } catch (message) {
        //         fallbackResult(message);
        //     }
        // };

        // // Callback Success
        // const renderResult = (results) => {
        //     // loaderElement.style.display = "none";
        //     // this.switchPage();
        //     // // Breadcrumb
        //     // const breadcrumbElement = document.querySelector(
        //     //     "breadcrumb-detail"
        //     // );
        //     // breadcrumbElement.currentPage = results.title;
        //     // Image
        //     // $("#detailImage").attr("src", results.image);
        //     // Detail Header
        //     // const detailHeaderElement = document.querySelector("detail-header");
        //     // const dataHeader = {
        //     //     title: results.title ? results.title : "NaN",
        //     //     sourcename: results.sourceName ? results.sourceName : "-",
        //     //     preparationminutes: results.preparationMinutes
        //     //         ? results.preparationMinutes
        //     //         : 0,
        //     //     servings: results.servings ? results.servings : 0,
        //     //     summary: results.summary ? results.summary : "-",
        //     // };
        //     // detailHeaderElement.update = dataHeader;
        //     // // Ingredients
        //     // results.extendedIngredients.forEach((item) => {
        //     //     $(".ingredients").append(`<li>${item.original}</li>`);
        //     // });
        //     // // Method
        //     // results.analyzedInstructions[0].steps.forEach((item) => {
        //     //     $(".methods").append(`<li>${item.step}</li>`);
        //     // });
        //     // $(window).scrollTop(0);
        // };

        // // Callback Failed
        // const fallbackResult = (message) => {
        //     // loaderElement.style.display = "none";
        //     alert(message);
        // };

        // Card News on Click
        // const cardNews = this.querySelector(".card-news");
        // cardNews.addEventListener("click", function () {
        //     const idNews = this.getAttribute("data-id");
        //     informationNews(idNews);
        // });
    }
}

customElements.define("news-item", NewsItem);

/* <style>
            .card {
                font-family: "Open Sans", sans-serif;
                cursor: pointer;
                border: 0;
            }

            .card:hover {
                opacity: 0.7;
            }

            .card img.card-img {
                height: 140px;
                object-fit: cover;
                border-radius: 1rem;
            }

            .card .card-body {
                padding: 1.25rem 0 1.25rem 0;
            }

            .card .card-body .card-title {
                font-size: 0.9rem;
            }

            .card .card-body .card-text {
                font-size: 0.7rem;
            }
        </style> */

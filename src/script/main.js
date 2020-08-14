import "./component/news-list.js";

import DataSource from "./data/data-source.js";

const main = () => {
    const searchElement = document.querySelector("search-bar");
    const newsListElement = document.querySelector("news-list");
    const loaderElement = document.querySelector("#loader-text");

    const onButtonSearchClicked = () => {
        if (searchElement.value != "") searchNews(searchElement.value);
    };

    const headlineNews = async () => {
        loaderElement.style.display = "block";
        try {
            const result = await DataSource.headlineNews();
            renderResult(result);
        } catch (message) {
            fallbackResult(message);
        }
    };

    const searchNews = async (keyword) => {
        loaderElement.style.display = "block";
        try {
            const result = await DataSource.searchNews(keyword);
            renderResult(result);
        } catch (message) {
            fallbackResult(message);
        }
    };

    const categoryNews = async (category) => {
        loaderElement.style.display = "block";
        try {
            const result = await DataSource.categoryNews(category);
            renderResult(result);
        } catch (message) {
            fallbackResult(message);
        }
    };

    const renderResult = (results) => {
        loaderElement.style.display = "none";
        newsListElement.news = results;
    };

    const fallbackResult = (message) => {
        loaderElement.style.display = "none";
        newsListElement.renderError(message);
    };

    headlineNews();

    searchElement.clickEvent = onButtonSearchClicked;

    // const categories = [
    //     "business",
    //     "entertainment",
    //     "health",
    //     "science",
    //     "sports",
    //     "technology",
    // ];

    const navLink = document.querySelectorAll(".category");
    navLink.forEach((item) => {
        item.addEventListener("click", function () {
            const category = this.textContent;
            categoryNews(category);
        });
    });

    //    // Get the input field
    //    var input = document.getElementById("myInput");

    //    // Execute a function when the user releases a key on the keyboard
    //    input.addEventListener("keyup", function (event) {
    //        // Number 13 is the "Enter" key on the keyboard
    //        if (event.keyCode === 13) {
    //            // Cancel the default action, if needed
    //            event.preventDefault();
    //            // Trigger the button element with a click
    //            document.getElementById("myBtn").click();
    //        }
    //    });
};

export default main;

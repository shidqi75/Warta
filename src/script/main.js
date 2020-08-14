import "./component/news-list.js";

import DataSource from "./data/data-source.js";

const main = () => {
    const searchBar = document.querySelector("search-bar");
    const newsList = document.querySelector("news-list");
    const pageLoader = document.querySelector(".loader");

    const onButtonSearchClicked = () => {
        if (searchBar.value != "") searchNews(searchBar.value);
    };

    const headlineNews = async () => {
        pageLoader.style.display = "block";
        try {
            const result = await DataSource.headlineNews();
            renderResult(result);
        } catch (message) {
            fallbackResult(message);
        }
    };

    const searchNews = async (keyword) => {
        pageLoader.style.display = "block";
        try {
            const result = await DataSource.searchNews(keyword);
            renderResult(result);
        } catch (message) {
            fallbackResult(message);
        }
    };

    const categoryNews = async (category) => {
        pageLoader.style.display = "block";
        try {
            const result = await DataSource.categoryNews(category);
            renderResult(result);
        } catch (message) {
            fallbackResult(message);
        }
    };

    const renderResult = (results) => {
        pageLoader.style.display = "none";
        newsList.news = results;
    };

    const fallbackResult = (message) => {
        pageLoader.style.display = "none";
        newsList.renderError(message);
    };

    headlineNews();

    searchBar.clickEvent = onButtonSearchClicked;

    const navLink = document.querySelectorAll(".category");
    navLink.forEach((item) => {
        item.addEventListener("click", function () {
            const category = this.textContent;
            categoryNews(category);
        });
    });
};

export default main;

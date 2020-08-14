import Dummy from "../data/dummy-data.json";

const baseUrl = "https://newsapi.org/v2";

class DataSource {
    // static headlineNews() {
    //     return fetch(
    //         `${baseUrl}/top-headlines?country=id&pageSize=24&apiKey=87ef1a15763d4ba084be4e2097d2a7ff`
    //     )
    //         .then((response) => {
    //             return response.json();
    //         })
    //         .then((responseJson) => {
    //             if (responseJson.status === "ok") {
    //                 return Promise.resolve(responseJson.articles);
    //             } else {
    //                 return Promise.reject(`News is not found`);
    //             }
    //         });
    // }

    static headlineNews() {
        return Dummy;
    }

    static searchNews(keyword) {
        return fetch(
            `${baseUrl}/everything?q=${keyword}&pageSize=24&apiKey=87ef1a15763d4ba084be4e2097d2a7ff`
        )
            .then((response) => {
                return response.json();
            })
            .then((responseJson) => {
                if (responseJson.status === "ok") {
                    return Promise.resolve(responseJson.articles);
                } else {
                    return Promise.reject(
                        `${keyword} is not found is not found`
                    );
                }
            });
    }

    static categoryNews(category) {
        return fetch(
            `${baseUrl}/top-headlines?country=id&pageSize=24&category=${category}&apiKey=87ef1a15763d4ba084be4e2097d2a7ff`
        )
            .then((response) => {
                return response.json();
            })
            .then((responseJson) => {
                if (responseJson.status === "ok") {
                    return Promise.resolve(responseJson.articles);
                } else {
                    return Promise.reject(`${category} is not found`);
                }
            });
    }
}

export default DataSource;

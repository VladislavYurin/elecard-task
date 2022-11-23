class Api {
    constructor() {
        this.path = "http://contest.elecard.ru/frontend_data/catalog.json";
    }

    getProducts() {
        return fetch(`${this.path}`, {
            headers: {

            }
        })
    }

}

export default Api;
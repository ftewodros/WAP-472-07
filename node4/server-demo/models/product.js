let products = [];

module.exports = class Product {
    constructor(id, title, price, description) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.description = description;
    }

    save() {
        this.id = Math.random();
        products.push(this); //id is assigned
        return this;
    }

    static getAll() {
        return products;
    }
}
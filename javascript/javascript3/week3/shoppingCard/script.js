class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

class ShoppingCart {
    constructor(products) {
        this.products = [products];
    }
    
    addProduct(product) {
        // add a product to the products array
        this.products.push(product)
    }

    removeProduct(product) {
        // remove a product from the products array
        let i = 0 ;
        while (  i < this.products.length ){
            if(this.products[i].name === product.name) {
                this.products.splice(i , 1);
                i = this.products.length + 1;
            }
            i++;
        }
    }

    searchProduct(productName) {
        // return an array of product that match the productName parameter
        let selectedProducts = [];
        for (let i = 0; i < this.products.length; i++) {
            if(this.products[i].name.includes(productName)) {
                selectedProducts.push(this.products[i]);
            }
        }
        console.log(selectedProducts);
    }

    getTotal() {
        // ould get the total price of the products in the shoppingcart
        let sum = 0;
        for (let i = 0; i < this.products.length; i++) {
            sum += this.products[i].price;
        }
        console.log(sum);

    }

    renderProducts() {
        // render the products to html
        const productsList = document.createElement('ul');
        for (let i = 0; i < this.products.length; i++) {
            const myLi = document.createElement('li')
            myLi.textContent = `${this.products[i].name} : ${this.products[i].price}`
            productsList.appendChild(myLi);
        }
        document.body.appendChild(productsList)
    }

    getUser() {
        return fetch('https://jsonplaceholder.typicode.com/users/1');
    }
}

const milk      = new Product('Milk' , 11);
const orange    = new Product('Orange' , 22);
const apple     = new Product('Apple' , 15);
const sugger    = new Product('Sugger' , 7);
const shoe      = new Product('Shoe' , 540);
const cellPhone      = new Product('Cell Phone' , 5000);
const simCard      = new Product('Sim Card' , 16);
const soymilk      = new Product('Soy milk' , 540);
const vinegar      = new Product('Vinegar' , 4);





let myShoppingCart = new ShoppingCart(milk);
myShoppingCart.addProduct(orange);
myShoppingCart.addProduct(apple);
myShoppingCart.addProduct(sugger);
myShoppingCart.addProduct(orange);
myShoppingCart.addProduct(shoe);
myShoppingCart.addProduct(cellPhone);
myShoppingCart.addProduct(simCard);
myShoppingCart.addProduct(vinegar);
myShoppingCart.addProduct(orange);
myShoppingCart.addProduct(soymilk);


myShoppingCart.removeProduct(orange);
myShoppingCart.removeProduct(orange);


console.log(myShoppingCart)

myShoppingCart.getTotal()

myShoppingCart.renderProducts();

myShoppingCart.searchProduct('ilk')

console.log(myShoppingCart.getUser())
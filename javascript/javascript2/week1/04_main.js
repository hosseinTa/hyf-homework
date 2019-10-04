const testProductNames =  getAvailableProducts()

console.log(testProductNames);
renderProducts(testProductNames);


function renderProducts(products) {
    const productList = document.querySelector('.products ul')
    const selecteddetails = ['name' , 'price' , 'rating', 'shipsTo']

    for (let index = 0; index < products.length; index++) {
        const NewProduct = document.createElement('li');
        const itemDetails = document.createElement('ul');
        let liText = [] ;
        for (let j = 0; j < selecteddetails.length; j++) {            
            // const detail = document.createElement('li');
            liText.push(`<li class="${selecteddetails[j]}">${products[index][selecteddetails[j]]}</li>`);
        }
        itemDetails.innerHTML = liText.join('')
        itemDetails.classList.add('detail')
        NewProduct.appendChild(itemDetails);  
        productList.appendChild(NewProduct);
    }
}
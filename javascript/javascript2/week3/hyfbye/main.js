const testProductNames =  getAvailableProducts()

console.log(testProductNames);
renderProducts(testProductNames);


function renderProducts(products) {
    const productPlace = document.getElementById('products');
    const selecteddetails = ['name' , 'price' , 'rating', 'shipsTo'];
    const productList = document.createElement('ul');
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
    console.log(productList);
    console.log(productPlace);
    productPlace.appendChild(productList);
}

const search = document.querySelector('input');
search.addEventListener('input' , returnSearch);

function returnSearch() {
    const search = document.querySelector('input');
    const selectedProducts = testProductNames.filter( products => products.name.toLowerCase().includes(search.value.toLowerCase()));
    const productListUL = document.querySelector('.products ul')
    productListUL.remove();
    renderProducts(selectedProducts);
}
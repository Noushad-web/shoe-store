// let cart = document.querySelectorAll('.cart');
let cart = [...document.querySelectorAll('.cart')];
let cartsup = document.querySelector('sup');
let selectedItem = document.getElementById('selectedItem');
// console.log(selectedItem);
let addedArray = [];

document.addEventListener('load', () => localStorage.setItem('totalSelected', '0'));





cart.forEach((value, index) => {
    value.addEventListener('click', (e) => {
        
        let target = e.target;
        if (target.innerText == "Added") {
            target.innerText = 'Add to cart';
            addedArray.pop();
            cartsup.innerText = addedArray.length;
        } else {
            target.innerText = 'Added';
            addedArray.push(target.innerText);            
            cartsup.innerText = addedArray.length;
        }
        // let json = JSON.stringify(Object.assign({}, addedArray))
        let length = addedArray.length;
        localStorage.setItem('totalSelected', length);
        
    })
})


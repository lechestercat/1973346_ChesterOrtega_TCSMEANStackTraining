// check for previous localSession
var cart = JSON.parse(localStorage.getItem("cart"));

console.log("storedCart: " + cart);

//creats array if there are no stored data
if (cart == null) {
    cart = [];
}

cartQty(cart);

// class of type products
class Product {
    id:number;
    name:string;
    price:number;
    qty:number;

    constructor(id:number, name:string, price:number, qty: number) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.qty = qty;
    }
    
}

// creat products for page
let laptop = new Product(1, "Pear Laptop Pro", 1000, 1);
let phone = new Product(2, "Pear Phone Max", 500, 1);
let couch = new Product(3, "Couch", 700, 1);
let desk = new Product(4, "Desk", 200, 1);
let tree = new Product(5, "Tree", 100, 1);
let bottle = new Product(6, "Water Bottle", 5, 1);


// add products to cart
// each onclick first checks if item is in cart just to update quantity
// else add item to cart
window.onload = () => {
    var addLaptop = document.getElementById("laptop");
    addLaptop.onclick = () => {
        if(cart.some(x => x === laptop)){
            let index = cart.indexOf(laptop);
            cart[index].qty += 1;
        }else{{
            cart.push(laptop);
        }}
        
        console.log("LAPTOP ADDED!");
        console.log(cart);
        cartQty(cart);
    }

    var addPhone = document.getElementById("phone");
    addPhone.onclick = () => {
        if(cart.some(x => x === phone)){
            let index = cart.indexOf(phone);
            cart[index].qty += 1;
        }else{{
            cart.push(phone);
        }}

        console.log("PHONE ADDED!");
        console.log(cart);
        cartQty(cart);
    }

    var addCouch = document.getElementById("couch");
    addCouch.onclick = () => {
        if(cart.some(x => x === couch)){
            let index = cart.indexOf(couch);
            cart[index].qty += 1;
        }else{{
            cart.push(couch);
        }}

        console.log("COUCH ADDED!");
        console.log(cart);
        cartQty(cart);
    }
    var addDesk = document.getElementById("desk");
    addDesk.onclick = () => {
        if(cart.some(x => x === desk)){
            let index = cart.indexOf(desk);
            cart[index].qty += 1;
        }else{{
            cart.push(desk);
        }}

        console.log("DESK ADDED!");
        console.log(cart);
        cartQty(cart);
    }

    var addTree = document.getElementById("tree");
    addTree.onclick = () => {
        if(cart.some(x => x === tree)){
            let index = cart.indexOf(tree);
            cart[index].qty += 1;
        }else{{
            cart.push(tree);
        }}

        console.log("TREE ADDED!");
        console.log(cart);
        cartQty(cart);
    }

    var addBottle = document.getElementById("bottle");
    addBottle.onclick = () => {
        if(cart.some(x => x === bottle)){
            let index = cart.indexOf(bottle);
            cart[index].qty += 1;
        }else{{
            cart.push(bottle);
        }}

        console.log("WATERBOTTLE ADDED!");
        console.log(cart);
        cartQty(cart);
    }
    
}

function cartQty(cart){
    let count = 0;

    // get cart size element to update it
    let cartSize = document.getElementById("cartSize");
    cart.forEach(element => {
        count += element.qty;
    });
    
    cartSize.innerHTML = count.toString();
    console.log(count);

    storeInLocal(cart);
}

function storeInLocal(cart) {
    localStorage.setItem("cart",JSON.stringify(cart));
    console.log("Saved!")
 }


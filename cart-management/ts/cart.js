// check for previous localSession
var cart = JSON.parse(localStorage.getItem("cart"));
console.log("storedCart: " + cart);
//creats array if there are no stored data
if (cart == null) {
    cart = [];
}
cartQty(cart);
// class of type products
var Product = /** @class */ (function () {
    function Product(id, name, price, qty) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.qty = qty;
    }
    return Product;
}());
// creat products for page
var laptop = new Product(1, "Pear Laptop Pro", 1000, 1);
var phone = new Product(2, "Pear Phone Max", 500, 1);
var couch = new Product(3, "Couch", 700, 1);
var desk = new Product(4, "Desk", 200, 1);
var tree = new Product(5, "Tree", 100, 1);
var bottle = new Product(6, "Water Bottle", 5, 1);
// add products to cart
// each onclick first checks if item is in cart just to update quantity
// else add item to cart
window.onload = function () {
    var addLaptop = document.getElementById("laptop");
    addLaptop.onclick = function () {
        if (cart.some(function (x) { return x === laptop; })) {
            var index = cart.indexOf(laptop);
            cart[index].qty += 1;
        }
        else {
            {
                cart.push(laptop);
            }
        }
        console.log("LAPTOP ADDED!");
        console.log(cart);
        cartQty(cart);
    };
    var addPhone = document.getElementById("phone");
    addPhone.onclick = function () {
        if (cart.some(function (x) { return x === phone; })) {
            var index = cart.indexOf(phone);
            cart[index].qty += 1;
        }
        else {
            {
                cart.push(phone);
            }
        }
        console.log("PHONE ADDED!");
        console.log(cart);
        cartQty(cart);
    };
    var addCouch = document.getElementById("couch");
    addCouch.onclick = function () {
        if (cart.some(function (x) { return x === couch; })) {
            var index = cart.indexOf(couch);
            cart[index].qty += 1;
        }
        else {
            {
                cart.push(couch);
            }
        }
        console.log("COUCH ADDED!");
        console.log(cart);
        cartQty(cart);
    };
    var addDesk = document.getElementById("desk");
    addDesk.onclick = function () {
        if (cart.some(function (x) { return x === desk; })) {
            var index = cart.indexOf(desk);
            cart[index].qty += 1;
        }
        else {
            {
                cart.push(desk);
            }
        }
        console.log("DESK ADDED!");
        console.log(cart);
        cartQty(cart);
    };
    var addTree = document.getElementById("tree");
    addTree.onclick = function () {
        if (cart.some(function (x) { return x === tree; })) {
            var index = cart.indexOf(tree);
            cart[index].qty += 1;
        }
        else {
            {
                cart.push(tree);
            }
        }
        console.log("TREE ADDED!");
        console.log(cart);
        cartQty(cart);
    };
    var addBottle = document.getElementById("bottle");
    addBottle.onclick = function () {
        if (cart.some(function (x) { return x === bottle; })) {
            var index = cart.indexOf(bottle);
            cart[index].qty += 1;
        }
        else {
            {
                cart.push(bottle);
            }
        }
        console.log("WATERBOTTLE ADDED!");
        console.log(cart);
        cartQty(cart);
    };
};
function cartQty(cart) {
    var count = 0;
    // get cart size element to update it
    var cartSize = document.getElementById("cartSize");
    cart.forEach(function (element) {
        count += element.qty;
    });
    cartSize.innerHTML = count.toString();
    console.log(count);
    storeInLocal(cart);
}
function storeInLocal(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
    console.log("Saved!");
}

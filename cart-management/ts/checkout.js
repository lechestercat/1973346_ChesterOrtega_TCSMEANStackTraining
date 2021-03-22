// function excutes upon page load 
window.onload = function () {
    //Retrieve the stored budgets
    var storedCart = JSON.parse(localStorage.getItem("cart"));
    // grabs table ID to start creating
    var table = document.getElementById("cartDetails");
    // grabs body of table
    var body = table.getElementsByTagName("tbody")[0];
    // for each loop that populates the table based on stored data
    var count = 0;
    storedCart.forEach(function (item) {
        //Add new row
        var newRow = body.insertRow();
        //Add cells to the new row
        var itemCell = newRow.insertCell(0);
        var priceCell = newRow.insertCell(1);
        //Fill cells with data
        itemCell.innerHTML = item.name;
        var sum = item.price * item.qty;
        priceCell.innerHTML = sum.toString();
    });
};

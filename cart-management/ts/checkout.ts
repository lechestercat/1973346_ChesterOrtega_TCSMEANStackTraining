var total = 0;

// function excutes upon page load 
window.onload = () =>{
    //Retrieve the stored budgets
    let storedCart = JSON.parse(localStorage.getItem("cart"));

    // grabs table ID to start creating
    let table = document.getElementById("cartDetails");
  
    // grabs body of table
    let body = table.getElementsByTagName("tbody")[0];
  
    // for each loop that populates the table based on stored data
    let count = 0;
    storedCart.forEach((item) => {
      
      //Add new row
      let newRow = body.insertRow();

      //Add cells to the new row
      let itemCell = newRow.insertCell(0);
      let priceCell = newRow.insertCell(1);
  
      //Fill cells with data
      itemCell.innerHTML = item.name;
      let sum = item.price * item.qty;
      priceCell.innerHTML = "$" + sum.toString();

      // get total
      
      total += sum;
    });

    let addTotal = document.getElementById("totalSum");
    addTotal.innerHTML = "$" + total.toString();
}
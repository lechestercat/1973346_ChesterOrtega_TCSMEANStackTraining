// function excutes upon page load 
(function () {
    //Retrieve the stored budgets
    var storedBudgets = JSON.parse(sessionStorage.getItem("storedBudgets"));

    // grabs table ID to start creating
    var table = document.getElementById("budget");
  
    // grabs body of table
    var body = table.getElementsByTagName("tbody")[0];
  
    // for each loop that populates the table based on stored data
    var count = 0;
    storedBudgets.forEach((budget) => {
      budget = JSON.parse(budget);
      count += parseInt(budget.budget);
      console.log(count)
      //Add new row
      var newRow = body.insertRow(body.length);

      //Add cells to the new row
      //thank you Akash for this
      var clientCell = newRow.insertCell(0);
      var projectCell = newRow.insertCell(1);
      var budgetCell = newRow.insertCell(2);
  
      //Fill cells with data
      clientCell.innerHTML = budget.client;
      projectCell.innerHTML = budget.pName;
      budgetCell.innerHTML = budget.budget;
    });
    document.write("Total Budget: " + count);

  })();


  // old code that was buggy
/*
var stored = sessionStorage.getItem("storedBudgets");
var dataObj = JSON.parse(stored);


insertNewRecord(dataObj);


function insertNewRecord(data){
    console.log(data[1]);
    var table = document.getElementById("budget")
    var body = table.getElementsByTagName("tbody")[0];
    var count = 0;
    for(var i = 0; i < data.length; i++){
        var tr ="<tr>"
        tr+="<td>"+ data[i].client+"</td>"
        tr+="<td>"+ data[i].pName+"</td>"
        tr+="<td>"+ data[i].budget+"</td>"
        body.innerHTML+=tr;
        count += parseInt(data[i].budget);
        console.log(count)
    }

    document.write("Total Budget: " + count);

}
*/
   
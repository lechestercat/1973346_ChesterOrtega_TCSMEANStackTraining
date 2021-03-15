function onFormSubmit() {
    const form = document.querySelector("form");

    // grab data from form
    var getData = readFormData();

    // save form data into json
    var budgetString = JSON.stringify(getData);
  
    //Retrieve stored budgets to add new budget item
    var storedBudgets = JSON.parse(sessionStorage.getItem("storedBudgets"));
  
    //creats array if there are no stored data
    if (storedBudgets == null) {
      storedBudgets = [];
    }
  
    //Add current budget to the array so that data does not overwrite 
    storedBudgets.push(budgetString);
  
    //Save the storedBudgets object to session storage
    console.log(storedBudgets);
    sessionStorage.setItem("storedBudgets", JSON.stringify(storedBudgets));
  
    //Clear form 
    form.reset();

  }

  function readFormData() {
    var obj = {}    // empty object
    obj.client = document.getElementById("client").value;
    obj.pName = document.getElementById("pName").value;
    obj.budget = document.getElementById("budget").value;
    return obj; 
}


// old buggy code
/*
var budgetInfo =[];
function storeInSession() {
    sessionStorage.setItem("budgetInfo",JSON.stringify(budgetInfo));
}

function onFormSubmit(){
    var data = readFormData();
    budgetInfo.push(data);      //in budgetInfo
    storeInSession();
    resetData();
    console.log(budgetInfo)
}

function readFormData() {
    var obj = {}    // empty object
    obj.client = document.getElementById("client").value;
    obj.pName = document.getElementById("pName").value;
    obj.budget = document.getElementById("budget").value;
    return obj; 
}


function resetData() {
document.getElementById("client").value="";
ç;
document.getElementById("budget").value="";
}
*/

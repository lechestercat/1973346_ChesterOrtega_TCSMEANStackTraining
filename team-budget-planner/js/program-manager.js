var budgetObj =[];
function storeInSession() {
    sessionStorage.setItem("budgetInfo",JSON.stringify(budgetObj));
}

function onFormSubmit(){
    var data = readFormData();
    budgetObj.push(data);      //in budgetObj
    storeInSession();
    resetData();
    console.log(budgetObj)
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
document.getElementById("pName").value="";
document.getElementById("budget").value="";
}

var data = sessionStorage.getItem("budgetInfo");
var dataObj = JSON.parse(data);


insertNewRecord(dataObj);


function insertNewRecord(data){
    var table = document.getElementById("budget")
    var body = table.getElementsByTagName("tbody")[0];
    var newRow = body.insertRow(body.length);  // row created 

    for(var i = 1; i < data.length; i++){
        body.insertRow(body.length);
        var cell1 = newRow.insertCell(0);          // cell created 
        cell1.innerHTML=data.name;                 // value placed        
    }
   
    /*
        var cell1 = newRow.insertCell(0);          // cell created 
        cell1.innerHTML=data[0].client;                 // value placed 
    
        var cell2 = newRow.insertCell(1);          // cell created 
        cell2.innerHTML=data[0].pName;                 // value placed

        var cell3 = newRow.insertCell(2);          // cell created 
        cell3.innerHTML=data[0].budget;                 // value placed

}
   
//import main file
let userInput = require("./getInput");

//grabs where previous info is saved or creates it
let userDataFile = "info.json";

//inits a new  gEtinput item and then stores it
let user = new userInput.GetInput(userDataFile);
user.storeUserInfo();
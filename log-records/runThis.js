//IMPORT main file
let userInput = require("./getInput");

//FILEPATH for your user-data file
let userDataFile = "info.json";

let user = new userInput.GetInput(userDataFile);
user.storeUserInfo();
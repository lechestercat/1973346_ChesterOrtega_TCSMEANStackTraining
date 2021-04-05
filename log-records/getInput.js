let readSync = require('readline-sync');

module.exports.GetInput = class GetInput {
  constructor(fileOutput) {
    this.fileOutput = fileOutput;
    this.info = ['id', 'first name', 'last name', 'age', 'gender', 'email'];
    this.validaters = [
      'number',
      'string',
      'string',
      'number',
      'gender',
      'email',
    ];
    debugger;
    this.userInfo = {};
  }

  // get the user's information
  grabUserData() {
    let userInfo = this.userInfo;
    let infoCount = 0;
    let input;
    let validaters = this.validaters;
    //loops through and gets user info
    this.info.forEach(function (element) {
      //validater
      switch (validaters[infoCount]) {
        //name
        case 'string':
          {
            do {
              input = readSync.question(`Please enter your ${element}: `);
              debugger;
            } while (!isNaN(input));
          }

          break;
        // age
        case 'number':
          {
            input = readSync.questionInt(`Please enter your ${element}: `);
            debugger;
          }

          break;
        //genger
        case 'gender':
          {
            do {
              console.log(`Male, Female, M, or F.`);
              input = readSync.question(`Please enter your ${element}: `);
              debugger;
            } while (input !== 'M' && input !== 'F' && input !== 'O' && input !== 'Male' && input !== 'Female' && input !== 'Other');
          }

          break;
        //email
        case 'email':
          {
            input = readSync.questionEMail(`Please enter your ${element}: `);
            debugger;
          }

          break;
      }
      userInfo[element] = input;
      debugger;
      infoCount++;
    });
    // time stamp records
    let timeStamp = new Date();
    userInfo['date'] = timeStamp.toLocaleDateString();
    userInfo['time'] = timeStamp.toLocaleTimeString();
    this.userInfo = userInfo;
  }

  //store user info
  storeUserInfo() {
    let fs = require('fs');
    this.grabUserData();
    debugger;
    let userInfo = JSON.stringify(this.userInfo);

    //grabs the original user data from our json file and appends new user data
    let userDataArr;
    let fileOutput = this.fileOutput;

    //if the file exists, read from it, otherwise skip
    try {
      if (fs.existsSync(fileOutput)) {
        userDataArr = fs.readFileSync(fileOutput).toString();
        userDataArr = JSON.parse(userDataArr);
      }
    } catch (err) {
      console.error(err);
    }
    debugger;

    //if there is no file or if the file is empty, make an empty userDataArr
    if (userDataArr === undefined) {
      userDataArr = [];
    }
    debugger;

    let userJSON = JSON.parse(userInfo);
    userDataArr.push(userJSON);

    //string formatter: if we use regular stringify() on userDataArr, it is all in one line.
    let userString = '';
    let curUser = 0;
    userString += '[\n\t';
    userDataArr.forEach(function (element) {
      userString += JSON.stringify(element);
      curUser++;
      if (curUser !== userDataArr.length) {
        userString += ',\n\t';
      } else {
        userString += '\n';
      }
    });
    userString += ']';
    debugger;

    // lets us know if succesful or not
    fs.writeFile(fileOutput, userString, (err) => {
      if (!err) {
        console.log(`User data successfully written to ${fileOutput}`);
      } else {
        console.log(`Error in storing user data: ${err}`);
      }
    });
  }
};

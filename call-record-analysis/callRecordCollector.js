const fs = require('fs');
let mongoose = require('mongoose'); //load the module

mongoose.Promise = global.Promise; // creating the reference.
let url = 'mongodb://localhost:27017/callrecords';

const mongooseDbOption = {
  // to avoid warning
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect(url, mongooseDbOption); //ready to connect
let db = mongoose.connection; // connected to database.
db.on('error', (err) => console.log(err));
db.once('open', () => {
  //Defined the Schema
  let CallSchema = mongoose.Schema({
    _id: Number,
    source: Number,
    destination: Number,
    sourceLocation: String,
    destinationLocation: String,
    callDuration: String,
    roaming: String,
    callCharge: Number,
  });

  // read JSON and parse the data
  let rawdata = fs.readFileSync('call_data.json');
  let phData = JSON.parse(rawdata);
  //console.log(phData);

  // Creating Model using schema
  let Call = mongoose.model('Call', CallSchema);

  // loop through parsed data and save to mongoDB
  phData.forEach((call) => {
    // Creating reference using model
    let calls = new Call(call);

    calls.save((err, result) => {
      if (!err) {
        console.log('record inserted successfully' + result);
      } else {
        console.log(err);
      }
      mongoose.disconnect(); //close the connectiond..
    });
  });
});

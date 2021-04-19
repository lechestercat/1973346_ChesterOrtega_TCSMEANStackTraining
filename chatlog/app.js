// required npm packages
const mongoose = require('mongoose');
let ChatModel = require('./model/chat.model');
const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = 9090;

const url = 'mongodb://localhost:27017/chatlogDB';
const mongooseDbOption = {
  //to avoid warnings
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect(url, mongooseDbOption); //ready to connect
mongoose.connection; //connect to database

//CREATE HTML table for chatlog
function createChatTable(chatLog) {
  let chatTableHTML = `<table style="border:1px solid black;margin:auto;text-align:center;"> 
    <thead><tr>
        <th style="border:1px solid black;">ID</th>
        <th style="border:1px solid black;">Name</th>
        <th style="border:1px solid red;">Message</th>
    </tr></thead>`;

  chatLog.forEach((message) => {
    chatTableHTML += `
        <tr>
            <td style="border:1px solid black;">${message._id}</td>
            <td style="border:1px solid black;">${message.name}</td>
            <td style="border:1px solid red;">${message.message}</td>
        </tr>`;
  });

  chatTableHTML += `</table><br/>`;
  return chatTableHTML;
}

//GET chatlog
function getChatLog(res) {
  let chatLog = [];
  ChatModel.find({}, (find_error, log_data) => {
    if (!find_error) {
      //get the chat log data
      chatLog = log_data;
      //create an HTML table and back button with the data
      let chatTable = createChatTable(chatLog);
      chatTable += `<div style="text-align:center;"><a href="/">Go Home</a></div>`;
      //send the table and button to the user
      res.end(chatTable);
    } else {
      console.log(find_error);
    }
  });
}

//STORE user chat message
function storeChatMessage(msg) {
  ChatModel.find({}, (find_error, log_data) => {
    if (!find_error) {
      //get current chatlog length
      msg._id = log_data.length + 1;
      //create new chat message model to store in db
      let m = new ChatModel(msg);
      //store in db
      m.save((save_error, chat_data) => {
        if (!save_error) {
          console.log('Message recorded successfully: ' + chat_data);
        } else {
          console.log(save_error);
        }
      });
    } else {
      console.log(find_error);
    }
  });
}

//router
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

//displays chatlog in table
app.get('/getChatLog', (req, res) => {
  getChatLog(res);
});

//SOCKET connetions for data sending to the server
io.on('connection', (socket) => {
  //when the server receives a user message, store it
  socket.on('user message', (msg) => {
    storeChatMessage(msg);
  });
});

http.listen(port, () => console.log(`Server running on port ${port}`));

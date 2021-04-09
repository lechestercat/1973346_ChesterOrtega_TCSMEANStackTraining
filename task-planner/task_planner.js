let http = require('http');
let url = require('url');
let fs = require('fs');
let port = 9090;

// create array Task array
let server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/html',
  });

  if (req.url != '/favicon.ico') {
    //html forms
    res.write(`
        <h2>Add Task</h2>
        <form>
          <label>Emp ID: </label>
          <input type="text" name="empId"/><br/>
          <label>Task ID: </label>
          <input type="text" name="taskId"/><br/>
          <label>Task: </label>
          <input type="text" name="task"/><br/>
          <label>Deadline: </label>
          <input type="date" name="deadline"/><br/>
          <button type="submit" value="Add" formaction="/store" method="get">Add Task</button>
          <input type="reset" value="Reset"/>
        </form>

        <br />

        <h2>Delete Task</h2>
        <form>
            <label>Task ID: </label>
            <input type="text" name="taskId"/><br/>
            <button type="submit" value="Delete" formaction="/delete" method="get">Delete Task</button>
            <input type="reset" value="Reset"/>
        </form>

        <br />
        <h2>List Task</h2>
        <form>
        <button type="submit" value="Display" formaction="/display">Display Tasks</button>
        </form>

`);
    //stores data
    if (req.url.includes('/store')) {
      // take the value from url
      let data = url.parse(req.url, true).query;

      // convert to object and save params
      let task = {};
      task.empId = data.empId;
      task.taskId = data.taskId;
      task.task = data.task;
      task.deadline = data.deadline;
      console.log('task:');
      console.log(task);

      // read from json file
      let tasksStr = fs.readFileSync('tasks.json');
      // parse the string
      let tasks = JSON.parse(tasksStr);
      console.log('tasks:');
      console.log(tasks);

      //store using push method and checks for duplicates
      let dup = false;
      tasks.forEach(function (e) {
        //checks for duplicates
        if (task.taskId === e.taskId) {
          dup = true;
        }
      });
      // pushes if unique
      if (!dup) {
        tasks.push(task);
      } else {
        //logs error when dup found
        console.log('Duplicate task ID!');
      }
      //converet to string
      let taskStr = JSON.stringify(tasks);
      console.log(taskStr);
      // store using fs module.
      fs.writeFileSync('tasks.json', taskStr);

      // delete task function
    } else if (req.url.includes('/delete')) {
      // grab params
      let data = url.parse(req.url, true).query;

      // read from file
      let tasksStr = fs.readFileSync('tasks.json');

      // convert to json
      let tasks = JSON.parse(tasksStr);

      // check value using iterator or loop
      let i = 0;
      tasks.forEach(function (e) {
        //if task is found delete
        if (data.taskId === e.taskId) {
          // removes that tasks and logs the message
          tasks.splice(i, 1);
          console.log('task deleted');
          return;
        }
        i++;
      });

      // store in file using fs module after stringify
      tasksStr = JSON.stringify(tasks);
      fs.writeFileSync('tasks.json', tasksStr);
    } else if (req.url.includes('/display')) {
      // read from file
      let taskString = fs.readFileSync('tasks.json');

      // convert to JSON
      let taskJson = JSON.parse(taskString);

      // diplay table of tasks
      let table = `
            <table style="border:1px solid black;">
                <thead><tr>
                    <th style="border:1px solid black;">Emp ID</th>
                    <th style="border:1px solid black;">Task ID</th>
                    <th style="border:1px solid black;">Description</th>
                    <th style="border:1px solid black;">Deadline</th>
                </tr></thead>`;
      taskJson.forEach(function (e) {
        table += `
                <tr>
                    <td style="border:1px solid black;">${e.empId}</td>
                    <td style="border:1px solid black;">${e.taskId}</td>
                    <td style="border:1px solid black;">${e.task}</td>
                    <td style="border:1px solid black;">${e.deadline}</td>
                </tr>`;
      });
      table += `</table>`;
      res.end(table);
    }
  }
});

server.listen(port, () => console.log(`Server running on port number ${port}`));

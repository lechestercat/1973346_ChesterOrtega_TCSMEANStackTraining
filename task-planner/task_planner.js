let http = require('http');
let url = require('url');
let fs = require('fs');
let port = 9090;

// create array Task array
let server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/html',
  });
  console.log(req.url);
  if (req.url != '/favicon.ico') {
    //html form
    res.write(`
        <h2>Add Task</h2>
        <form action="store" method="get">
          <label>Emp ID: </label>
          <input type="text" name="empId"/><br/>
          <label>Task ID: </label>
          <input type="text" name="taskId"/><br/>
          <label>Task: </label>
          <input type="text" name="task"/><br/>
          <label>Deadliune: </label>
          <input type="date" name="deadline"/><br/>
          <input type="submit" value="Add Task"/>
          <input type="reset" value="Reset"/>
        </form>

        <br />

        <h2>Delete Task</h2>
        <form>
            <label>Task ID: </label>
            <input type="text" name="taskId"/><br/>
            <input type="submit" value="Delete Task"/>
            <input type="reset" value="Reset"/>
        </form>

        <br />
        <h2>List Task</h2>
        <form>
            <input type="submit" onclick="" value="List All Tasks"/>
        </form>

`);

    if (req.url.includes('/store')) {
      console.log(url.parse(req.url, true));
      let data = url.parse(req.url, true).query;
      console.log('EmpID: ' + data.empId);
      // take the value from url
      // convert to object
      // store records in object using push method
      //converet to string
      // store using fs module.
    } else if (req.url == '/delete') {
      // read from file
      // convert to json
      // check value using iterator or loop
      // delete using array method's
      // store in file using fs module.
      //if task id not available display error message.
    } else if (req.url == '/display') {
      // read from file
      // convert to json
      //iterator loop
      // create tableData variable using backticks
      /*
                    <table>
                    <tr>
                            <td>${variableName}</td>
                    </tr>
                    </table>
                    res.end(tableDatavariable);
                */
    }
  }
});

server.listen(port, () => console.log(`Server running on port number ${port}`));

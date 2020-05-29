//objective is to parse a json object using server side code of nodejs
//including dependencies
var http=require('http');
var url=require('url');

//creating an array of objects
var tasklist=[
    {
        title: 'Task 1',
        description: 'This is the first task',
        deadline: 'today',
        id: 1
    },
    {
        title: 'Task 2',
        description: 'This is the second task',
        deadline: 'tomorrow',
        id: 2
    },
    {
        title: 'Task 3',
        description: 'This is the third task',
        deadline: 'yesterday',
        id: 3
    },
    {
        title: 'Task 4',
        description: 'This is the last task',
        deadline: 'today',
        id: 4
        }
];

//creating server
var server=http.createServer((req,res)=> {
    //declaring response array
    var responseArray=[];
    //copying contents to the response array
    for(var i=0;i<tasklist.length;i++)
    {
        responseArray.push(tasklist[i]);
    }
    //converting to json
    var stringarray=JSON.stringify(responseArray);
    res.write(stringarray);
    res.end();
});
server.listen(8080);
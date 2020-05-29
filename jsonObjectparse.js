var http=require('http');
var url=require('url');


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


var server=http.createServer((req,res)=> {
    var responseArray=[];
    for(var i=0;i<tasklist.length;i++)
    {
        responseArray.push(tasklist[i]);
    }
    var stringarray=JSON.stringify(responseArray);
    res.write(stringarray);
    res.end();
});
server.listen(8080);
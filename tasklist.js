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


var server= http.createServer((req,res)=>{
    res.write("<h1>Task List!!</h1>");
    for(var i=0;i<tasklist.length;i++)
    {
        res.write( `<div>
                    <h2>${tasklist[i].title}</h2>
                    <h3>${tasklist[i].description}</h3>
                    <p>${tasklist[i].deadline}</p>
                    </div>
                    <br />
                    <br />`

        );
    }
res.end();
});
server.listen(8080);

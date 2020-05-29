//this is a simple code to print hello world using server side js 
//including http
var http=require('http');
var server= http.createServer((req,res) =>{
    res.write("<h1>Hello World!!</h1>");
    res.end();
});

server.listen(8080);
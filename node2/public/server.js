
var connect = require('connect');
var http = require('http');

var app = connect();


// function doFirst(request,response,next){
//     console.log("bacon yum");
//     next();
// }
//
// function doSecond(request,response,next){
//     console.log("too much bacon ");
//     next();
// }
//
// app.use(doFirst);
// app.use(doSecond);

 function profile (request,response){

 	console.log('User requested profile');

 }

 function forum(request,response){

 	console.log('user requested forum');
 }

 app.use('/profile',profile);
 app.use('/forum', forum);

http.createServer(app).listen(8888);
console.log("server is now running...");
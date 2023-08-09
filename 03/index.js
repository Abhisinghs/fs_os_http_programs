//when we use the file system so we require the fs module to use all file operation
const fs=require('fs');

const node_architect_info="Node.js is a platform that utilizes JavaScript and is primarily employed for developing web applications that are highly focused on input/output operations, including but not limited to chat applications and multimedia streaming websites. The platform is constructed using Google Chrome's V8 JavaScript engine. A web application is a type of software that executes on a server and is displayed by a client's browser that obtains all the application's resources over the internet.";

//create a file and write the data 
fs.writeFile('nodes_architecture.txt',node_architect_info,function(err){
    if(err){
        console.log(err.message);
    }
    console.log('wirte data successfully');
})


// now we read the content of nodes_architecture.txt of 01 folder 
fs.readFile('nodes_architecture.txt',function(err,data){
    if(err){
        console.log(err.message);
    }
    console.log("Architecture Information : ",data.toString());
})
//when we use the file system so we require the fs module to use all file operation
const fs=require('fs');

//now append the advantage of nodes architecture in exisisting txt file 
let advantage ="Compared to other server-side languages, Node js has distinct advantages. Its asynchronous model and non-blocking I/O operation improve the scalability and performance of web applications built on other frameworks. Node js can easily handle multiple client requests without requiring multiple threads, consuming less memory and resources. Additionally, it is highly scalable and provides high performance. Node js is also flexible with multiple frameworks and makes the development process easier.Compared to other server-side languages, Node js has distinct advantages. Its asynchronous model and non-blocking I/O operation improve the scalability and performance of web applications built on other frameworks. Node js can easily handle multiple client requests without requiring multiple threads, consuming less memory and resources. Additionally, it is highly scalable and provides high performance. Node js is also flexible with multiple frameworks and makes the development process easier."

fs.appendFileSync('nodes_architecture.txt',advantage);



// now we read the content of nodes_architecture.txt of 01 folder 
let readData=fs.readFileSync('nodes_architecture.txt');
console.log(readData.toString());
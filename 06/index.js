//first we require the os module 
const os=require('os');

//now we have the information of operating system name and release 
console.log("operating System name : "+ os.type());

console.log("os release : "+os.release());
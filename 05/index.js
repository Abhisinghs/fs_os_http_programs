//when we use the file system so we require the fs module to use all file operation
const fs=require('fs');

// now we delete the exisisting file and print message delete succeffully to the console
fs.unlink('nodes_architecture.txt',function(err){
    if(err){
        console.log(err.message);
    }
    console.log("file delete successfully ");
})
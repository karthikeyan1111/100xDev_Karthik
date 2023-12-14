const { error } = require("console");
const fs = require("fs");

function sumOfNumbers(n){
    let sum =0 ;
    for(let i=1; i<=n; i++){
        sum += i;
    }
    return sum;
}

fs.readFile("test.txt","utf-8",(err,data)=>{
    console.log(data);
    // console.log(sumOfNumbers(100000000000)); // Play with the argument of this function call Uncomment this console.log to learn about
    // the async functions
});

const additionalData = " This is the data im appending to the existing test file"
fs.appendFile("test.txt", additionalData, (err)=>{
 
    console.log("Updated file with additional data");
})

fs.readFile("test.txt","utf-8",(err,data)=>{
    console.log(data);
}); 

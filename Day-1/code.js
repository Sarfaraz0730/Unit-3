// // Write a function that accepts any Array or object as an argument.

// // In the function body, write a code that will create a copy of that array/object.

// // When you change the value of copied array/object, it shouldn’t affect the original array/object. .

// // Comment each line ( mandatory )


// var array = [1,2,3,4,5] // cretion of an array 

// function acceptarr(arr){ // functon created an argument arr passed to it
// var newarray = array  // reassignment of an array
// console.log(newarray[0])
// console.log(newarray) 
// }
// acceptarr(array) // calling a function




function runProgram(input) {
   // Write code here
 }
 if (process.env.USER === "sarfaraz") {
   runProgram(``);
 } else {
   process.stdin.resume();
   process.stdin.setEncoding("ascii");
   let read = "";
   process.stdin.on("data", function (input) {
     read += input;
   });
   process.stdin.on("end", function () {
     read = read.replace(/\n$/, "");
     read = read.replace(/\n$/, "");
     runProgram(read);
   });
   process.on("SIGINT", function () {
     read = read.replace(/\n$/, "");
     runProgram(read);
     process.exit(0);
   });
 }

 console.log(process.env)



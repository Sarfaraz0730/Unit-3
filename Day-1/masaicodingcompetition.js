function masaiCodingCompetetion(arr){
  let m = [], q1 = [], q2 = [], q3 = [], q4 = [], obj = {};
  for(let i = 0; i < arr.length; i++){
    let com = arr[i][0], club = arr[i][1], rollNo = arr[i][2];
    if(com == "E"){
      if(obj[club] === undefined){
        obj[club] = 1;
        m.push(club);
        if(club == 1){
          q1.push(rollNo);
        }else if(club == 2){
          q2.push(rollNo);
        }else if(club == 3){
          q3.push(rollNo);
        }else{
          q4.push(rollNo);
        }
      }else{
        if(club == 1){
          q1.push(rollNo);
        }else if(club == 2){
          q2.push(rollNo);
        }else if(club == 3){
          q3.push(rollNo);
        }else{
          q4.push(rollNo);
        }
      }
    }
    else{
       let mFront = m[0];
       if(mFront == 1){
         console.log(1, q1.shift());
         if(q1.length == 0){
           m.shift();
           delete obj[mFront];
         }
       }else if(mFront == 2){
         console.log(2, q2.shift());
         if(q2.length == 0){
           m.shift();
            delete obj[mFront];
         }
       }else if(mFront == 3){
         console.log(3, q3.shift());
         if(q3.length == 0){
           m.shift();
            delete obj[mFront];
         }
       }else{
          console.log(4, q4.shift());
         if(q4.length == 0){
           m.shift();
            delete obj[mFront];
         }
       }
    }
  }
}
 
function runProgram(input) {
    // Write code here
   input = input.trim().split("\n");
   let q = +input[0].trim();
   let arr = [], line = 1;
   for(let i = 0; i < q; i++){
     arr.push(input[line++].trim().split(" "));
   }
   masaiCodingCompetetion(arr);
  };
  if (process.env.USERNAME === "sarfaraz") {
    runProgram(`5
E 1 1
E 2 1
E 1 2
D
D`);
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
      process.exit(0) ;
    });
  }


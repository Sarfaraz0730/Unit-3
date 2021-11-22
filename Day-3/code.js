 var arr = []
//  var n =5;
function push1 (n,x){
   last =-1;
    if(last ==n){
        console.log("Stack Overflow")
    }else {
        // arr.push(x);
        // console.log("nice")
        // console.log(arr)
        last =last+1;
        arr[last] = 10;
        last++;
        arr[last] = 20;
        last++;
        arr[last] = 30;
        last++;
        arr[last] = 14;
        last++;
        arr[last] = 100;
        last++;
        arr[last] = 10;
        last++;
        arr[last] = 10;
        last++;


        console.log(arr)
    }
    console.log(arr.length)

};


push1(5,0);
//write a function to add two number




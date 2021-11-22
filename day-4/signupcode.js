document.getElementById("button").addEventListener("click", SignupFun);

var array =JSON.parse(localStorage.getItem("userdatajoin")) || [];

function SignupFun(){
   
    var fname = document.getElementById("fname").value;
   // console.log("fname :" + fname)
   var lname = document.getElementById("lname").value;

   var age = document.getElementById("age").value;
   var contact = document.getElementById("contact").valuel;
   var Email = document.getElementById("Email").value;
   var select = document.getElementById("select").value;
   var password = document.getElementById("password").value;
   var Confirmpassword= document.getElementById("Confirmpassword").value;
   console.log(contact)
  
   console.log(fname,lname,age, contact,Email,select,contact );

   //    creating a object of credential



var signupObject = {
    UserFname : fname,
    UserLname : lname,
    UserAge : age,
    UserContact :contact,
    UserEmail : Email,
    UserGender :select,
    Userpassword:password,
    userConfirmpassword:Confirmpassword,
};
array.push(signupObject);
localStorage.setItem("userdatajoin" ,JSON.stringify(array));
 if(fname.length==0){
     alert("please fill your name")
 }else if(lname.length==0){
     alert("Please fill your Last Name")
 }else if(age.length ==0){
     alert("Enter your Age")
 }

 else if(Email.length==0 ){
     alert("Enter your Email - id")
 } else if(password.length<=5){
     alert("Please Enter Strong password" )
 }else if(Confirmpassword.length<=5){
     alert("Please Enter Strong Password")
 }

 else {
     
    window.location.href ="Home.html";
    alert("Your Account has been created")
  }
   
}




















// document.getElementById("registerbutton").addEventListener("click", resitrationFn);
//  function resitrationFn(e){
//      e.preventDefault();
//     var createmail =document.getElementById("createmail").value;
//     var firstname = document.getElementById("firstname").value;
//     var lastname = document.getElementById("lastname").value;
//     var select = document.getElementById("select").value;
//     var PhoneNumber = document.getElementById("PhoneNumber").value;
//     var createpassword = document.getElementById("createpassword").value;
//     var confirmpassword = document.getElementById("confirmpassword").value;
    
//    creating a object of credential

// var usercredntialJoinPage ={
//     Usercreatemail :createmail,
//     Userfirstname : firstname,
//     UserLastname:lastname,
//     UserSelectcountry :select,
//     UserPhoneNumber :PhoneNumber,
//     UserCreatepassword :createpassword,
//     userConfirmpassword :confirmpassword,
// };
   
// registeruserarray.push(usercredntialJoinPage);
// localStorage.setItem("userdatajoin" ,JSON.stringify(registeruserarray));

// if(createmail=="" && firstname =="" && lastname=="" &&  PhoneNumber==""){
//     alert("Please Fill the Necessary Details");
// } else if  (confirmpassword.length < 8 && confirmpassword.length <8) {
//     alert("Enter strong password  minimum password length should be 8 ");
// }

//   else {
     
//     window.location.href ="Signup.html";
//     alert("Your Account has been created")
//   }

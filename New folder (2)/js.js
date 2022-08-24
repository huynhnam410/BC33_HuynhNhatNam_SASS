const obj = {
    name1: "Anh",
    age: 20
   }
   obj.name1= "Lydia Hallie"
   

   console.log(obj.name1)


   document.querySelector("#test").innerHTML = "Hi Cybersoft!";

   var numbers = [5, 20, 10, 75, 50, 100]; 
numbers.pop(); 
console.log(numbers);



function checkPassword(value) { 
    var passwordError = ""; 
    const passwordPattern = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/ 
    if (value.match(passwordPattern)) { 
    passwordError = "" 
    } else { 
    passwordError = "Mật khẩu phải chứa ít nhất 1 số, 1 chữ hoa, 1 chữ thường và độ dài ít nhất là 8 ký tự." 
    } 
    console.log(passwordError); 
   } 
   checkPassword("test123");

   function upper_case(str) 
{ 
 regexp = /^[A-Z]/; 
 if (regexp.test(str)) 
 { 
 console.log("String's first character is uppercase"); 
 } 
 else 
 { 
 console.log("String's first character is not uppercase"); 
 } 
} 
upper_case('Nbcd'); 
upper_case('abcd');
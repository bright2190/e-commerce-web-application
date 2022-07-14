
//function showSomething() {
    //alert("Incorrect email or password");  
// //}
// function dolSomething(){
//     window.location.href="short.html";
// }
// // window.addEventListener("load", function() {

// //     let getUser = localStorage.getItem("users");

// //     if(getUser != null) {
// //         getUser = JSON.parse(getUser);

     
// //         for(i = 0; i < getUser.length; i++) {
// //        globalArray.push(getUser[i]);

// //         }

// //         // globalArray.push(getUser);
// //     }


// // })

// // let globalArray =  [];
// function showSomething(){
// let button = document.getElementsById("btn");

// button.addEventListener("click", function() {

//     input1 = document.getElementsById("email").value.trim(); // email
//     input2 = document.getElementsById("password").value.trim(); //password



//     let userDetails = {

//         username: input1,
//         password: input2

//     }

//     globalArray.push(userDetails);

//     localStorage.setItem("users", JSON.stringify(globalArray));

//     document.getElementsById("email").value = "";

//     document.getElementsById("password").value = "";

//     alert("User Registered Sucessfully");

//     // console.log(nameOnly);
// })
// }


// let login = document.getElementsByClassName("button")[0];

// if(login) {

//     document.getElementsByTagName("button")[0].style.display = "none";

// }

// login.addEventListener("click", function() {

//     input1 = document.getElementsByTagName("input")[0].value; // username
//     input2 = document.getElementsByTagName("input")[1].value; //password

//     let storeName = localStorage.getItem("users");

//     if(storeName != null) {

//         let checker = [];

//         storeName = JSON.parse(storeName);

//         for(let i = 0; i < storeName.length; i++) {

//             if(input1 == storeName[i].username && input2 == storeName[i].password) {

//                 checker.push("login");

//                 // location.href = "user.html";

//                 break;

//             } 

//         }


//         if(checker.length != 0) {

//             let logDetails = {
//                 username : input1,
//                 password : input2
//             }



//             localStorage.setItem("checkLog", JSON.stringify(logDetails));

//             window.location.href = "user.html";

//         } else {

//             document.getElementById("tide").style.display = "block";


//         }




//         console.log(storeName);


//     } else {

//         alert("Please Register");
//     }

//     storeName = JSON.parse(storeName);


//     console.log(storeName);

//     if(input1 == storeName.username && input2 == storeName.password) {

//         window.location.href = "user.html";

//     } else {


//         alert("we dont know you");

//     }


//     // console.log(nameOnly);
// })


let btn = document.getElementsByClassName("btnn")[0];
btn.onclick = function(){

    window.location.href = "with.html";
    alert("Registration successful");
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
console.log(email)
console.log(password);

    let userDetails ={
        email:email,
        password: password
    }

    let saveDetails = checkUser();

    saveDetails.push(userDetails);
    saveDetails=JSON.stringify(saveDetails);
    localStorage.setItem("users", saveDetails);

    function validateForm() {
        var a = document.forms["Form"]["answer_a"].value.trim();
        var b = document.forms["Form"]["answer_b"].value.trim();
        if (!a || !b) {
          alert("Please Fill All Required Fields");
          return false;
        }
      }

         } 
    
 



function checkUser(){
   let saveDetails = localStorage.getItem("users");
    if(saveDetails == null || saveDetails == undefined){
        return [];
    }else{
        saveDetails = JSON.parse(saveDetails);
        return saveDetails;
    }
}
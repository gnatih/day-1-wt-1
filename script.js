var student_name = "Diya";
var age = 5;
// let number1 = prompt("Give me a number:");

let temp = 0;

let myel = xyz(".myclass");

function myel(selector) {
  return document.querySelectorAll(selector);
}

document.write("<h1>Hello world!</h1>");

let myarray = [111, 350, 3];

// for (var i = 0; i < myarray.length; i++) {
//   console.log(myarray[i]);
// }
// console.log("Before adding: ", myarray.length);

// myarray.push("Lina");

// console.log(myarray);

var myobj = {
  name: "Jayesh",
  age: 44,
  school: "ABC",
  location: "Ahmedabad",
  greet: function () {
    console.log("abc..");
  },
};

// myobj.name = "New name";
// console.log(myobj.length);

// for (var i = 0; i < myobj.length; i++) {
//   console.log(myobj[i]);
// }

// alert("Hello world!");

function erase() {
  let n = document.getElementById("mynum").value;

  //...
  // document.write('')
  let outputDiv = document.getElementById("output");

  outputDiv.innerHTML = "";
  outputDiv.style.backgroundColor = "#ff0000";

  // let paragraphs = document.querySelectorAll("p");

  // for (var i = 0; i < paragraphs.length; i++) {
  //   paragraphs[i].innerHTML = "No data here..";
  // }
}

// let input = prompt("Give me a number!");

// for (var i = 1; i <= age; i++) {
//   console.log("Happy Birthday!" + " " + i);
// }

// console.log(number1);

// console.log(student_name, age);

// function mycomputation() {
//   for (var i = 0; i < 100; i++) {
//     //do something here..

//     if (statement == true) {
//       //do something
//     } else {
//       //dont..
//     }
//   }
// }

// mycomputation();

// function square(anynumber) {
//   return anynumber * anynumber;
// }

// function sum(a, b) {
//   return a + b;
// }

// let difference = function (a, b) {
//   return b - a;
// }

// // let sq = square(15);

// let sum1 = sum(5, 2);
// console.log(sum1);

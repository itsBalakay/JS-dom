// var first = "blake";
// let second = "wes";
// const age = 100;

// function sayHi() {
//   console.log("hi");
// }

// const age = 100;

// function go() {
//   const hair = "blonde";
//   console.log(hair);
//   console.log(age);
// }
// go();

// console.log(age);

function isCool(name) {
  let cool;
  if (name === "wes") {
    cool = true;
  }
  return cool;
}
//var variables are function scoped not block scoped like let and const
//this works for the above function:
// function isCool(name){
//     if(name==='wes'){
//         var cool = true;
//     }
//     console.log(cool);
//     return cool;
// }

for (let i = 0; i < 10; i++) {
  console.log(i);
}

const dog = "snickers";

function logDog(dog) {
  console.log(dog);
}
function go() {
  const dog = "whateverYouPassedInAsTheFirstArgumentToTheFunction";
  logDog("sunny");
}

go();

//try not to create global variables

//function scoping

function hello(name) {
  function yell() {
    console.log(name.toUpperCase());
  }
  yell();
}

//functions are scoped to the parent function just like variables

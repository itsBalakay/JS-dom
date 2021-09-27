//very simple sync file

// let a = 1;
// let b = 2;

// console.log("Synchronus");

// console.log(a);
// console.log(b);

let a = 1;
let b = 2;

setTimeout(() => {
  console.log("Asynchronus");
}, 100);
//will print after the rest because it is asynchronus set to print 100ms after being read

fetch("/").then(() => {
  console.log("Fetch");
});
//this occurs before setTimeout because it is faster than 100ms in this case

console.log("Synchronus");

console.log(a);
console.log(b);

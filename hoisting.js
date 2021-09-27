console.log(age);
var age = 10;

sayHi();

function sayHi() {
  console.log("hey!");
  console.log(add(10, 2));
}

//this works because the JS compilier moves all function declerations to the top of the file so they can all be called

function add(a, b) {
  return a + b;
}

console.log("is this working");

const myParagraph = document.createElement("p");
myParagraph.textContent = "I am a P";
myParagraph.classList.add("special");
console.log(myParagraph);

const myImage = document.createElement("img");
myImage.src = "https://picsum.photos/500";
myImage.alt = "myimageimage";

const myDiv = document.createElement("div");
myDiv.classList.add("wrapper");
console.log(myDiv);

myDiv.appendChild(myImage);
myDiv.appendChild(myParagraph);
document.body.appendChild(myDiv);

//oh shoot! we need to add something to the top like a heading !

const heading = document.createElement("h2");
heading.textContent = "Cool things";

myDiv.insertAdjacentElement("afterbegin", heading);

const listDiv = document.createElement("div");
listDiv.classList.add("list-div");

//dom for ul
const uL = document.createElement("ul");
const lI = document.createElement("li");
lI.textContent = "three";
uL.appendChild(lI);
listDiv.appendChild(uL);

document.body.insertAdjacentElement("afterbegin", listDiv);

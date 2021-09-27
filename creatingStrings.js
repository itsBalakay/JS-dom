const item = document.querySelector(".item");
console.log(item.innerHTML); //getter
const width = 500;
const src = `https://picsum.photos/${width}`;
const desc = `Cute Pup`;
const myHTML = `
    <div class="wrapper">
        <h2>Cute ${desc}</h2>
        <img src = "${src}" alt=""/>
    </div>
`;
// console.log(typeof myHTML);
// console.log(myHTML);
// item.innerHTML = myHTML;
// console.log(item.innerHTML);

//turn a string into a dom element
const myFragment = document.createRange().createContextualFragment(myHTML);
console.log(myFragment.querySelector("img"));
console.log(myFragment);

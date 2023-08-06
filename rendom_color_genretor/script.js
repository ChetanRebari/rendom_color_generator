
const containerEl=document.querySelector(".container");
console.log(containerEl);

const input=document.querySelector("input");
console.log(input)

function random_color(){
    let red=Math.floor(Math.random()*256);
    let green=Math.floor(Math.random()*256);
    let blue=Math.floor(Math.random()*256);
    const rbg=`rgb(${red},${green},${blue})`;
    return rbg;
}

function changecolor(){
    const rendomcolor=random_color();
    containerEl.style.backgroundColor=rendomcolor;
    input.value=rendomcolor;

}
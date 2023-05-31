

const butt=document.getElementsByClassName('grif');
const navi=document.getElementsByClassName('nav')
for(let i of butt) {
    i.addEventListener('click', creat1, function thered() {
        document.navi.classList.add('red')
    })
}
function griffon(){
    alert("Congratulations you are a Gryffindor!");
};
function creat1(){
var firstd =document.createElement("div");
var texty=document.createTextNode("this is a something griffy");
firstd.appendChild(texty);
var hiss = documet.getElementsByClassName("houses");
hiss.appendChild(firstd);

}
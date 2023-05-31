function griffon(){
    alert("Congratulations you are a Gryffindor!");
    const body=document.querySelector("body")
    document.body.style.backgroundColor = 'rgb(95, 14, 14)';
    const para = document.createElement("p");
    const node = document.createTextNode("This is new.");
    para.appendChild(node);
    
    const element = document.getElementById("div1");
    element.innerHTML='';
    element.appendChild(para);
    };



function crow(){
    alert("Congratulations you are a Ravenclaw!");
    const body=document.querySelector("body")
    document.body.style.backgroundColor = 'rgba(12, 12, 131, 0.836)';
}

function buffoon() {
     alert("Congratulations you are a Hufflepuff!");
     const body=document.querySelector("body")
     document.body.style.backgroundColor = 'rgb(209, 156, 22)';
    }
function snake(){
    alert("Congratulations you are a Slytherin");
const body=document.querySelector("body")
    document.body.style.backgroundColor = 'rgb(51, 112, 51)';
    const nav=document.querySelector("navbar")
    document.nav.style.backgroundColor = 'rgb(114, 207, 114);';
}    

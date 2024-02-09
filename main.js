// let vars=document.getElementsByClassName("btn1")
// console.log(vars)

// vars.onclick=()=>{
//     vars.style.background="white"
// }

let b=document.getElementsByClassName("boxes");
console.log(b)
document.querySelectorAll(".boxes").forEach(element => {
    console.log(element)
    element.style.color="red";
});
// b.addEventListener('click',()=>{
    // b[0].style.color="red";
// })

    // let h=document.getElementById("main-heading");
    // console.log(h);
    // h.style.color="red";

    // document.body.style.background="red";

// })

let mail=document.querySelector(".ends")
console.log(mail);

mail.addEventListener("click",()=>{
    mail.innerHTML="I am Clicked";
    mail.style.background="black";

})
// mail.onclick=change()
// function change(){
//     mail.style.background="black";

// 
// mail.addEventListener('click',()=>{
// })
// mail.onclick=change;

// mail.onclick=()=>{
//     var s= this.parentNode.style;
//     s.background="pink";
// }

// creation of new div and adding below a div
let a=2;


const remove=()=>{
    alert("removed")
    first.remove(div);
}

const adding=()=>{
    let div=document.createElement("div")
    div.innerHtml="This is a box";
    div.setAttribute("class","new-box");
    first.after(div);
}
let first=document.querySelector(".box-1");
// let i=0;
first.addEventListener("click",adding);
// if(a==2)
first.removeEventListener('dblclick',remove);
    // if(i%2==0){

    // }
    // else
    // first.removeEventListener("click",adding);
    // i++;

    // document.body.scrollTop = document.documentElement.scrollTop = 0;
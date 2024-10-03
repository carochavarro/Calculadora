let a= document.getElementById("a");
let b= document.getElementById("b");
let c= document.getElementById("c");
let buttonAdd= document.getElementById("buttonAdd");

// function suma(){
//     c.value=Number(a.value)+Number(b.value)
// }

// buttonAdd.addEventListener("click",suma())

buttonAdd.addEventListener("click",(ev)=>{
    c.value = Number(a.value) + Number(b.value)
})


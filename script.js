const input= document.getElementById("number-input")
const result= document.getElementById("result")
function handleClickButton(el){
    const exp =`${input.value} ${el.innerText}`
    input.value= exp
    if(["+","-","*","/"].includes(el.innerText))return;
    console.log(el.innerText)
    result.value=eval(exp)
    
}
function reset(){
    input.value=""
    result.value=""
}

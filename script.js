const input = document.querySelector(".input");
var clear = document.querySelector(".clear")

//  var one = document.querySelector(".one");
// clear.addEventListener("click",function(){
//     input.innerText="0"
// })
function one(){
    if(input.innerText === "0"){
        input.innerText = "1";
    }else{
        input.innerText += "1";
    } 
}
function two(){
    if(input.innerText === "0"){
        input.innerText = "2";
    }else{
        input.innerText += "2";
    } 
}
function three(){
    if(input.innerText === "0"){
        input.innerText = "3";
    }else{
        input.innerText += "3";
    } 
   
}
function four(){
    if(input.innerText === "0"){
        input.innerText = "4"; 
    }else{
        input.innerText += "4"; 
    } 
 
}
function five(){
    if(input.innerText === "0"){
        input.innerText = "5"; 
    }else{
       input.innerText += "5"; 
    } 
 
}
function six(){
    if(input.innerText === "0"){
        input.innerText = "6"; 
    }else{
        input.innerText += "6";
    } 

}
function seven(){
    if(input.innerText === "0"){
        input.innerText = "7"; 
    }else{
        input.innerText += "7";
    } 
     
}
function eight(){
    if(input.innerText === "0"){
        input.innerText = "8";
    }else{
        input.innerText += "8";
    } 
    
}
function nine(){
    if(input.innerText === "0"){
        input.innerText = "9";
    }else{
        input.innerText += "9";
    } 
    
}
function zero(){
    if(input.innerText === "0"){
        console.log("can't add");
    }else{
        input.innerText += "0";
    } 
    
}
function division(){
        if(input.innerText[input.innerText.length -1] === "0" || input.innerText[input.innerText.length -1] === "/" || input.innerText[input.innerText.length -1] === "-" || input.innerText[input.innerText.length -1] === "+" || input.innerText[input.innerText.length -1] === " *"){
            console.log("Can't add");
        }else{
            input.innerText += "/";
        } 
}
function multiply(){
    if(input.innerText[input.innerText.length -1] === "0" || input.innerText[input.innerText.length -1] === "/" || input.innerText[input.innerText.length -1] === "-" || input.innerText[input.innerText.length -1] === "+" || input.innerText[input.innerText.length -1] === " *"){
        console.log("Can't add")
    }else{
        input.innerText += "*";
    }  
}
function substract(){
    if(input.innerText[input.innerText.length -1] === "/" || input.innerText[input.innerText.length -1] === "-" || input.innerText[input.innerText.length -1] === "+" || input.innerText[input.innerText.length -1] === " *"){
        console.log("Can't add")
    }else if(input.innerText === "0"){
        input.innerText = "-";
    }
    else{
        input.innerText += "-";
    }  
}
function add(){
    if(input.innerText[input.innerText.length -1] === "/" || input.innerText[input.innerText.length -1] === "-" || input.innerText[input.innerText.length -1] === "+" || input.innerText[input.innerText.length -1] === " *"){
        console.log("Can't add")
    }else if(input.innerText === "0"){
        input.innerText = "+";
    }
    else{
        input.innerText += "+";
    }  
}
function del(){
    if(input.innerText === "0"){
        console.log("Can't delete")
    }else if( input.innerText.length === 1){
        input.innerText = "0";
    }
    else{
        var number = input.innerText;
        var answer = number.slice(0,-1);
        input.innerText = answer;
    }
}
function percentage(){
   var answer = (input.innerText) / 100;
   input.innerText = answer;
}
function doubleZero(){
    if(input.innerText[input.innerText.length -1] === "0" || input.innerText[input.innerText.length -1] === "/" || input.innerText[input.innerText.length -1] === "-" || input.innerText[input.innerText.length -1] === "+" || input.innerText[input.innerText.length -1] === " *"){
        console.log("Can't add");
    } else{
        input.innerText += "00";
    }
}
function dot(){
    if(input.innerText[input.innerText.length -1] === "0" || input.innerText[input.innerText.length -1] === "/" || input.innerText[input.innerText.length -1] === "-" || input.innerText[input.innerText.length -1] === "+" || input.innerText[input.innerText.length -1] === " *"){
        console.log("Can't add");
    }else {
        input.innerText += ".";
    }
}
function equal(){
    var answer = eval(input.innerText)
    input.innerText = answer;
}
function yo(){
    input.innerText ="0";
}
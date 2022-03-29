function subtract(a,b) {
    let sum = a-b;
    return sum;
}

function add(a,b) {
    let sum = a+b;
    return sum;
}

function multiply(a,b) {
    let sum = a*b;
    return sum;
}

function divide(a,b) {
    if (b==0) {
        return "ERROR"
    }
    else {
        let sum = a/b;
        return sum;
    }
}


function operate(sign,a,b) {

    if(sign == "-") {
        return subtract(a,b);
    }
    else if(sign == "+") {
        return add(a,b);
    }
    else if(sign == "x") {
        return multiply(a,b);
    }
    else if(sign == "÷") {
        return divide(a,b);
    }
    else {
        return ("None");
    }
    
}

const text = document.getElementById("text");
let newText = "";
let a = "x";
let sign = "";
text.innerText = "0";

let btns = document.querySelectorAll("button");


for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function (e) {
        console.log(e.target.value)
        let input = e.target.value;
        numberCheck(input);
    });
}

function numberCheck(input) {
if (isNaN(input)) {
    console.log("not a numb");
    if (input == "=") {
        a = Number(a);
        newText = Number(newText)
        text.innerText = operate(sign,a,newText).round(4);
        a = operate(sign,a,newText);
        newText = "";
        sign = "b";
    }
    else if(input == "clear") {
        a = "x";
        b = "x"
        newText = ""
        text.innerText = newText;
        sign = "";
    }
    else {
        if(sign == "") {
            a = newText;
           sign = input;
           newText = "";
           return newText;
       }
        
        else if(sign == "b") {
            sign = input;
            newText = "";
            return newText;
        }
        else {
            a = Number(a);
            newText = Number(newText)
            text.innerText = operate(sign,a,newText).round(4);
            a = operate(sign,a,newText);
            newText = "";
            sign = input;
        }
    }
}
else {
    
    newText = newText + input;
    text.innerText = newText;  
    return newText;
}
};

Number.prototype.round = function(n) {
    const d = Math.pow(10, n);
    return Math.round((this + Number.EPSILON) * d) / d;
  }
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
        return sum.toFixed(1);
    }
}


function operate(sign,a,b) {

    if(sign == "-") {
        return subtract(a,b);
    }
    else if(sign == "+") {
        return add(a,b);
    }
    else if(sign == "*") {
        return multiply(a,b);
    }
    else if(sign == "/") {
        return divide(a,b);
    }
    
}

console.log(operate("/",2,3))
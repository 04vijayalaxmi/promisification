function add(a,b){
    return a+b;
}

function multiply(a,b){
    return a*b;
}

function square(val){
    return val*val;
}

function addTwoandSquare(a,b){
    return square(add(a,b));
}

function composeTwoFunction(fn1,fn2){
    return function(a,b){
        return fn2(fn1(a,b));
    };
}

const task= composeTwoFunction(add,square)
console.log(task(2,3));
console.log(addTwoandSquare(2,3));

const task1= composeTwoFunction(multiply,square)
console.log(task1(2,3));
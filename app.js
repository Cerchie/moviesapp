function holler() {
    console.log('hyeah!');
}

holler();

const whisper = function () {
    console.log('shshshsh!');
}

function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

const mathFuncs = [add, subtract, multiply, divide];
setTimeout(whisper, 4000)

function doMath(a, b, mathFunc) {
    return mathFunc(a, b);
}

doMath(3, 2, function (a, b) {
    console.log(a ** b)
})

function allMath(a, b, mathFuncs) {
    for (let func of mathFuncs) {
        console.log(func(a, b));
    }
};
/*
Function A => log a
Function B => log b
Function C (boolean, func1, func2)
*/
function a () {
    console.log('A');
       // body
}
function b () {
    console.log('B');
       // body
}
function c (bool, func1, func2) {
    const f = bool ? func1 : func2;
    return f;
    // body
}
c(true, a, b);//test syntax  NO RUN
c(true, a, b)();

function inc (x) {
    return 
    
}
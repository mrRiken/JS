//  This is used when we want our functions to be called after declaration.
/* 
normal method

function f1(name){

    console.log(`${name} database connected`)
}
f1("mongoDB");

works but it can also bring some global variables/pollution to our functions so we avoid it in iife
*/

// we use

// named iife
(function f1(){
    console.log(`${name} database connected`)
})("mongoDB");
//           ^-- very important in iife functions, it will stop this current function so new line can get executed

// arrow function iife
((name) => {
    console.log(`${name} database connected`)
})("mongoDB");
"use strict";

let list = [1, 2, "tres", 4, 5];

function printWithDelay(text, callback){
    setTimeout(function () {
        console.log(text);
        callback()
    }, 2000);
}

function execRecursive(array, func, callbackEnd){
    if(array.length !== 0){
        func(array.shift(), function () {
            execRecursive(array, func, callbackEnd);
        })
    }else{
        callbackEnd();
    }
}

execRecursive(list, printWithDelay, function () {
    console.log("he terminado");
});

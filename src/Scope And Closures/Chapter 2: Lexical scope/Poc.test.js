/*js can execute new code in runtime with eval()*/
/*i can not test it in a test*/

function foo(str) {
    eval(str);
    console.log(a);
}

foo("let a = 2");
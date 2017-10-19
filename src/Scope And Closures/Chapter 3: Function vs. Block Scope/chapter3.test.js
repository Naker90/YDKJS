let assert = require('chai').assert;
let fs = require('fs');

describe("Proof of concepts - Chapter 3", () => {

    it('a way to declare private', () => {
        function doSomething(a){
            /*doSomethingElse is a private function that be inside of doSomething scope*/
            function doSomethingElse(a){
                return a * 2;
            }

            return (a + doSomethingElse(a));
        }

        assert(doSomething(2), 15);
    });

    it('a simple example of scope', () => {
       var a = 2;

       /*IIFE*/
        (() => {
           var a = 3;
           assert(a, 3);
       })();

       assert(a, 2);
    });
});
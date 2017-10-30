let expect = require('chai').expect;

describe("Chapter 5: Scope Closure", () => {

    it('simple example of closure', function () {
        function foo(){
            let a;
            function bar() {
                a = 2;
            }
            return bar;
        }

        let baz = foo(); //baz is a reference to bar()
        expect(baz).to.be.a("function")
    });

});
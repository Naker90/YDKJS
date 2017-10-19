let assert = require('chai').assert;
let Practice = require('./Practice');

describe("Practice Should", () => {

   it("don't buy a phone if the necessary _balance is not available", () => {
      let practice = new Practice(120);
       assert.equal(practice.buyAll(),
           "You have bought 0 phones and 0 accessories with a total price " +
           "of $0.00. You can afford this purchase.")
   });

    it("buy a phone if the necessary _balance is available", () => {
        let practice = new Practice(350);
        assert.equal(practice.buyAll(),
            "You have bought 1 phones and 1 accessories with a total price " +
            "of $226.78. You can afford this purchase.")
    });

    it("buy as many phones and accessories as you can", () => {
        let practice = new Practice(999.95);
       assert.equal(practice.buyAll(),
           "You have bought 4 phones and 4 accessories with a total price " +
           "of $907.11. You can afford this purchase.")
    });

    it("calculate the correct tax of 8%", () => {
       let practice = new Practice(0);
       assert.equal(practice.calculateTax(100), 108);
    });

    it("buy a phone but can't afford the price", () => {
        let practice = new Practice(199.99);
        assert.equal(practice.buyAll(),
            "You have bought 1 phones and 0 accessories with a total price " +
            "of $215.99. You can't afford this purchase.")
    })

});
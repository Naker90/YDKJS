const MOBILE_PRICE = 199.99;
const ACCESSORIES_PRICE = 9.99;
const TAX = 0.08;

class Practice {

   constructor(balance){
      this.balance = balance;
      this._balance = balance;
      this.countPhones = 0;
      this.countAccessories = 0;
   }

    buyPhone(){
        this._balance -= MOBILE_PRICE;
        this.countPhones++;
    };

    buyAccessories(){
        this._balance -= ACCESSORIES_PRICE;
        this.countAccessories++;
    }

    buyAll(){
       while(this._balance >= MOBILE_PRICE){
          this.buyPhone();
          if(this._balance >= ACCESSORIES_PRICE){
              this.buyAccessories();
          }
       }

       let price = this.calculatePrice();

       let message = "You have bought " + this.countPhones + " phones and "
            + this.countAccessories + " accessories with a total price of $"
            + String(price);

       return (price <= this.balance)
           ? message += ". You can afford this purchase."
           : message += ". You can't afford this purchase."
    }

    calculateTax(number){
        number += number * TAX;
        return number;
    }

    calculatePrice() {
        let phonesPrice = this.countPhones * MOBILE_PRICE;
        let accessoriesPrice = this.countAccessories * ACCESSORIES_PRICE;
        return (this.calculateTax(phonesPrice + accessoriesPrice)).toFixed(2);

    }
}

export default Practice;

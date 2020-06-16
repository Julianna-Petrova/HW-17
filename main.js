'use strict';

class Hamburger {
  constructor(size, stuff, sauce) {
    this.size = size;
    this.stuff = stuff;
    this.sauce = sauce;
  }

  static SIZE_SMALL = { name: 'SIZE_SMALL', price: 50, calories: 20 };

  static SIZE_LARGE = { name: 'SIZE_LARGE', price: 100, calories: 40 };

  static STUFFING_CHEESE = { name: 'STUFFING_CHEESE', price: 10, calories: 20 };

  static STUFFING_SALAD = { name: 'STUFFING_SALAD', price: 20, calories: 5 };

  static STUFFING_POTATO = { name: 'STUFFING_POTATO', price: 15, calories: 10 };

  static TOPPING_SPICE = { name: 'TOPPING_SPICE', price: 15, calories: 0 };

  static TOPPING_MAYO = { name: 'TOPPING_MAYO', price: 20, calories: 5 };

  addTopping(sauce) {
    this.sauce = sauce;
  }

  calculateCalories() {
    const calories = this.size.calories + this.stuff.calories;
    if (this.sauce !== undefined) {
      return calories + this.sauce.calories;
    }
    return calories;
  }

  calculatePrice() {
    const price = this.size.price + this.stuff.price;
    if (this.sauce !== undefined) {
      return price + this.sauce.price;
    }
    return price;
  }
}

const hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);

hamburger.addTopping(Hamburger.TOPPING_MAYO);
console.log(`Цена ${hamburger.calculatePrice()}`);
console.log(`Калории ${hamburger.calculateCalories()}`);

hamburger.addTopping(Hamburger.TOPPING_SPICE);
console.log(`Цена c приправой ${hamburger.calculatePrice()}`);

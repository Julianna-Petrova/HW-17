'use strict';

class Hamburger {
  constructor(size, stuff, sauces = []) {
    this.size = size;
    this.stuff = stuff;
    this.sauces = sauces;
  }

  static SIZE_SMALL = { name: 'SIZE_SMALL', price: 50, calories: 20 };

  static SIZE_LARGE = { name: 'SIZE_LARGE', price: 100, calories: 40 };

  static STUFFING_CHEESE = { name: 'STUFFING_CHEESE', price: 10, calories: 20 };

  static STUFFING_SALAD = { name: 'STUFFING_SALAD', price: 20, calories: 5 };

  static STUFFING_POTATO = { name: 'STUFFING_POTATO', price: 15, calories: 10 };

  static TOPPING_SPICE = { name: 'TOPPING_SPICE', price: 15, calories: 0 };

  static TOPPING_MAYO = { name: 'TOPPING_MAYO', price: 20, calories: 5 };

  addToppings(...sauces) {
    this.sauces.push(...sauces);
  }

  calculateCalories() {
    const calories = this.size.calories + this.stuff.calories;
    if (this.sauces.length) {
      return calories + this.sauces.reduce((acc, sause) => acc + sause.calories, 0);
    }
    return calories;
  }

  calculatePrice() {
    const price = this.size.price + this.stuff.price;
    if (this.sauces.length) {
      return price + this.sauces.reduce((acc, sause) => acc + sause.price, 0);
    }
    return price;
  }
}

const hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);

// Можно добавить один топинг или сразу несколько
hamburger.addToppings(Hamburger.TOPPING_SPICE, Hamburger.TOPPING_MAYO);

console.log(`Цена ${hamburger.calculatePrice()}`);
console.log(`Калории ${hamburger.calculateCalories()}`);

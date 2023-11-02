"use strict";
// normal function 
function add(num1, num2) {
    return num1 + num2;
}
// arrow function 
const addArrow = (num1, num2) => num1 + num2;
// object --> method
const goribUser = {
    name: 'sazed',
    balance: 0,
    addBalance(balance) {
        return `this is my new balance ${this.balance + balance}`;
    }
};
const ages = [11, 2, 12, 45];
const newAges = ages.map((age) => age * age);

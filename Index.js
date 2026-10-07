import BankAccount from "./bankAccount.js";

//Create instances of BankAccount
const secondBank = new BankAccount (75694284, "John Doe");
const thirdBank = new BankAccount (58544932, "Tom Smith", 1000);

//deposit money

secondBank.deposit(100);
thirdBank.deposit(50);

//withdraw money 

secondBank.withdraw(50);
thirdBank.withdraw(10);

//check balance

secondBank.checkBalance();
thirdBank.checkBalance();

console.log(secondBank.withdraw(1000));

console.log(thirdBank.withdraw(2000));
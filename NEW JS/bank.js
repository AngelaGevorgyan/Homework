let bankAccount = {
  accountHolder: "John Doe",
  balance: 1000,

  deposit: function(amount) {
    if (amount > 0) {
      this.balance += amount;
      console.log(`Deposited ${amount} dollars. New balance: ${this.balance} dollars.`);
    } else {
      console.log("Invalid deposit amount.");
    }
  },

  withdraw: function(amount) {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      console.log(`Withdrawn ${amount} dollars. New balance: ${this.balance} dollars.`);
    } else {
      console.log("Invalid withdrawal amount or insufficient funds.");
    }
  },

  checkBalance: function() {
    console.log(`Current balance: ${this.balance} dollars.`);
  }
};

// Example usage of the bank account methods
console.log("Account Holder:", bankAccount.accountHolder);
bankAccount.checkBalance();

bankAccount.deposit(500);
bankAccount.withdraw(200);
bankAccount.checkBalance();

bankAccount.withdraw(1000); 
let shoppingCart = {
    items: [],
  
    addItem: function(itemName, price, quantity) {
      let newItem = {
        name: itemName,
        price: price,
        quantity: quantity
      };
      this.items.push(newItem);
      console.log(`${quantity} ${itemName}(s) added to the cart.`);
    },
  
    removeItem: function(itemName) {
      let indexToRemove = this.items.findIndex(item => item.name === itemName);
  
      if (indexToRemove !== -1) {
        this.items.splice(indexToRemove, 1);
        console.log(`${itemName} removed from the cart.`);
      } else {
        console.log(`${itemName} not found in the cart.`);
      }
    },
  
    calculateTotal: function() {
      let totalCost = this.items.reduce((total, item) => total + item.price * item.quantity, 0);
      console.log(`Total cost of items in the cart: $${totalCost.toFixed(2)}`);
    }
  };
  
  shoppingCart.addItem("Laptop", 1200, 1);
  shoppingCart.addItem("Headphones", 100, 2);
  shoppingCart.calculateTotal();
  
  shoppingCart.removeItem("Laptop");
  shoppingCart.calculateTotal();
  
  shoppingCart.removeItem("Tablet"); 
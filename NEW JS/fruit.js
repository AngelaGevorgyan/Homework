let Fruit = {
    name: "",
    color: "",
    taste: ""
  };
  
  let apple = Object.assign({}, Fruit, { name: "Apple", color: "Red", taste: "Sweet" });
  let banana = Object.assign({}, Fruit, { name: "Banana", color: "Yellow", taste: "Sweet" });
  let orange = Object.assign({}, Fruit , { name: "Orange", color: "Orange", taste: "Citrusy" });
  
  console.log("Details of Fruit:");
  console.log("Apple:", apple);
  console.log("Banana:", banana);
  console.log("Orange:", orange);
  console.log("Grape:", grape);
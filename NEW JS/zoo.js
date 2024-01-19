let zoo = {
    name: "Zoo",
    location: "Erevan",
    animals: [
      {
        name: "A",
        species: "Lion",
        age: 5
      },
      {
        name: "B",
        species: "Elephant",
        age: 8
      },
      {
        name: "C",
        species: "Cheetah",
        age: 3
      },
      {
        name: "D",
        species: "Bear",
        age: 4
      }
    ]
  };
  
  console.log("Zoo Name:", zoo.name);
  console.log("Location:", zoo.location);
  console.log("\nAnimals:");
  
  zoo.animals.forEach(animal => {
    console.log("\nName:", animal.name);
    console.log("Species:", animal.species);
    console.log("Age:", animal.age);
  })

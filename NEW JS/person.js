function Person(name, age) {
    this.name = name;
    this.age = age;
  }

  let person1 = new Person("John Doe", 25);
  let person2 = new Person("Jane Smith", 30);
 
  console.log("Person 1:");
  console.log("Name:", person1.name);
  console.log("Age:", person1.age);
  
  console.log("\nPerson 2:");
  console.log("Name:", person2.name);
  console.log("Age:", person2.age);
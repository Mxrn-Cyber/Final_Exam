function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function () {
  console.log(`Hi, I'm ${this.name}`);
};

const cat = new Animal("Fluffy");
cat.speak();

const lesson1 = {
  materia: "Matemática",
  numeroEstudantes: 20,
  professor: "Maria Clara",
  turno: "manhã",
};

const lesson2 = {
  materia: "História",
  numeroEstudantes: 20,
  professor: "Carlos",
};

const lesson3 = {
  materia: "Matemática",
  numeroEstudantes: 10,
  professor: "Maria Clara",
  turno: "noite",
};

//   exercise 1

const addTurn = (object, key, value) => object[key] = value;

addTurn(lesson2, "turno", "manhã");

console.log(lesson2);

// exercise 2

const listKeys = (object) => console.log(Object.keys(object));
console.log(listKeys(lesson3)); // Investigar pq está imprimindo "undefined" após o resultado

// exercise 3

const objectLenght = (object) => console.log(Object.keys(object).length);
console.log(objectLenght(lesson2)); // Investigar pq está imprimindo "undefined" após o resultado

// exercise 4

const listValues = (object) => console.log(Object.values(object));
console.log(listValues(lesson3)); // Investigar pq está imprimindo "undefined" após o resultado


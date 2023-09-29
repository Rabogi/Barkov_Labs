let iString = "I am a string";
let iX = 45;
let iY = 23.12;
let iActive = true;
let iUndefined;
let iNull = null;
let iObject = {};

console.log("iString = " + iString);
console.log("iX = " + iX);
console.log("iY = " + iY);
console.log("iActive = " + iActive);
console.log("iUndefined = " + iUndefined);
console.log("iNull = " + iNull);
console.log("iObject = " + iObject);

// *****************************************

let iX = 45;
let newX = iX + 5;
let newX2 = newX + 5.5;
let newX3 = newX + "5.5";

console.log(typeof newX3);
console.log(typeof newX2);

// *****************************************

let iArray = new Array();
console.log(typeof iArray);

let iArrayToo = [];
console.log(typeof iArrayToo);

// *****************************************

let iArray3 = [1, "dog", null];
console.log(iArray3);

console.log(iArray3[0]);

iArray3[1] = "cat";
console.log(iArray3);

// *****************************************

let iMatrix = [
  [1, 2, 3],
  [4, 5, 6],
];
console.log(iMatrix);
console.log(iMatrix[1][1]);

// *****************************************

let people = [
  ["Игорь", 21, false],
  ["Виталий", 20, false],
  ["Анна", 22, true],
  ["Алина", 21, true],
];

console.log(people);

console.log(people[0][1]);

// *****************************************

let User = new Object();
console.log(User);
User = {};
console.log(User);

User = {
  name: "Игорь",
  lastname: "Барков",
  age: 21,
};

console.log(User);
console.log(User.name);
console.log(User.lastname);

delete User.age;
console.log(User);

// *****************************************

let User = {
  name: "Игорь",
  lastname: "Барков",
  age: 21,
  interests: ["IT", "Music", "Art"],
  pet: {
    name: "None",
    type: "Literally none",
    color: "Color of nothing",
  },
};

console.log(User);

// *****************************************

let Cat = {
  name: "Kot",
  meow: "https://www.myinstants.com/en/instant/cute-meow/",
  say: function () {
    console.log(this.meow);
  },
};

Cat.say();

// *****************************************

let User = {
  name: "Игорь",
};

let Specialty = {
  type: "Программист",
};

let Qualification = {
  qualification: "Junior",
};

console.log(Object.assign(User, Specialty, Qualification));

// Primitives
let username: string;
let phone: number;
let isTrue: boolean;

// Arrays
let usernames: String[] = ["Om", "Hari"];
console.log(usernames);

// Declaring objects
let om: {
  name: string;
  age: number;
};

// Array of objects
let objs: {
  name: string;
  age: number;
}[];

/**
 * Type inference
 */
let language = "Marathi";
// Now here TS will automatically treat language as a string
// If you try to initiliaze it with a number, it throws an error
// This is Type Inference
// Error: Type 'number' is not assignable to type 'string'
// language = 1234;

/**
 * Having multiple types
 */
let num: string | number = "23";
num = 23;
// NOTE: Here the Type Inference won't throw an error

/**
 * Aliases
 */
type Phone = {
  name: string;
  manufacturer: string;
};

// NOTE: "type" is TS specific
let iphone: Phone;
iphone = {
  name: "11 Pro Max",
  manufacturer: "Apple",
};

let iphones: Phone[];

/**
 * Functions and types
 */
// Setting return type of a function
// TS does it automatically
// Incase your return type is different mention it explicitly
// NOTE: Mention "void" incase the function does not return anything
function add(a: number, b: number): string {
  return a + "" + b;
}

console.log(add(1, 2));

/**
 * Generics
 */
function insertAtBegin(array: any[], value: any): any[] {
  const newArr = [value, ...array];
  return newArr;
}

// NOTE: In the above function we are not utilizing the TS functionalities
// Incase if we call newArr[0].split("") on an array of numbers, out code breaks

function insertAtBeginGeneric<T>(array: T[], value: T) {
  const newArr = [value, ...array];
  return newArr;
}

const intArr = insertAtBeginGeneric([1, 2, 3], 0);
// NOTE: Now using string specific functions on an "int" array shows errors
console.log(intArr[0]);
const stringArr = insertAtBeginGeneric(["a", "b", "c"], "d");
console.log(stringArr[0].split(""));


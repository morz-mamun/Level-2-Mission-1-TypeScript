"use strict";
// Basic data type
// Primitive data type
// * implicit data type, which means typescript infer the data type that is string or something. 
let firstName = 'Morshed';
// ** Explicit data type, which means we defined the data type. --> 
let lastName = 'Mamun';
let roll = 123;
let isAdmin = true;
let x = undefined;
let y = null;
// ** Any type data type --> do not use it. 
let d;
d = 123, d = 'ddd', d = true;
// Non Primitive data type 
// Array -> 
let friends = ['Saide', 'mamun'];
friends.push('Rafat');
let numbers = [1, 2, 3, 4];
// Tuple -> Tuple is a special type of array, where maintain order and type of value.
let ageName = [25, "mamun", true];
// Reference data type --> Object 
const user = {
    company: 'Programming Hero',
    ceoName: 'Jhankar Bhai',
    firstName: 'Morshed',
    lastName: 'Mamun',
    isMarried: false
};

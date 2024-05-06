// Basic data type

// Primitive data type
// * implicit data type, which means typescript infer the data type that is string or something. 

let firstName = 'Morshed' 

// ** Explicit data type, which means we defined the data type. --> 

let lastName : string = 'Mamun'
let roll : number = 123
let isAdmin : boolean = true
let x : undefined = undefined
let y : null = null

// ** Any type data type --> do not use it. 
let d;
d = 123, d = 'ddd', d = true

// Non Primitive data type 

// Array -> 

let friends : string[] = ['Saide', 'mamun']
friends.push('Rafat')

let numbers : number[] = [1, 2, 3, 4] 

// Tuple -> Tuple is a special type of array, where maintain order and type of value.

let ageName : [number, string, boolean] = [25, "mamun", true]

// Reference data type --> Object 

const user : {
    company: 'Programming Hero'; // literal data type - when a value act like a type.
    readonly ceoName : string; // its called access modifier, with that we can fixed a value.
    firstName: string;
    middleName?: string; // this is called optional data type.
    lastName: string;
    isMarried: boolean;

} = {
    company: 'Programming Hero',
    ceoName: 'Jhankar Bhai',
    firstName: 'Morshed',
    lastName : 'Mamun',
    isMarried: false
}

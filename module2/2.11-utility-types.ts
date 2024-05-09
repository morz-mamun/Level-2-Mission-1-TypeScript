{
  // Utility types ->

  // Pick type

  type Person = {
    name: string;
    age: number;
    email?: string;
    contactNo: string;
  };

  type NameAge = Pick<Person, "name" | "age">; // this is Pick type

//   Omit type 

  type ContactInfo = Omit<Person, 'name' | 'age'> // this is Omit type 

//   Partial type - make all optional type 

  type PersonPartial = Partial<Person>

//   Readonly type -> 
  type PersonReadonly = Readonly<Person>

  const person1 : PersonReadonly = {
    name: 'Mr.xx',
    age: 26,
    contactNo: '017'
  }

  person1.name = 'Mr.xx' // can't change the property value because it's a readonly type 


// Record type -> most important type 

  type MyObj = Record<string, string>

  const emptyObj : Record<string, unknown> = {} // most important

  const obj1 : MyObj = {
    a: 'aa',
    b: 'bb',
    c: 'cc',
    d: 'dd'
  } 



}

{
  // interface is kinda type alias. But the main different between these is -> interface used in object /non-primitive data and in type alias only used in primitive data.

  type User1 = {
    // this is type alias
    name: string;
    age: number;
  };

  interface User2 {
    // this is interface
    name: string;
    age: number;
  }

  /** Extend property of an object by type alias using intersection and also using interface. **/

  type userWithRole1 = User1 & { role: string };
  interface userWithRole2 extends User2 {
    role: string;
  }

  const user1: userWithRole2 = {
    name: "Morshed",
    age: 25,
    role: "manager",
  };

  // In js ->
  /**
   * Object is object
   * Array and function also one kind of object
   */

  type Roll1 = number[];
  interface Roll2 {
    [index: number]: number;
  }
  const rollNumber: Roll2 = [1, 2, 3];

  // function
  type Add1 = (a: number, b: number) => number;
  interface Add2 {
    (a: number, b: number) : number
  }
  const add: Add2 = (a, b) => a + b;
}

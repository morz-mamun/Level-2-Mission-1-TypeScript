{
  // OOP -> Inheritance in OOP -> Parent class theke clid class a kono kisu niye jawa.

  class Person {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
      this.name = name;
      this.age = age;
      this.address = address;
    }

    getSleep(numOfHours : number){
        console.log(`${this.name} will sleep for ${numOfHours}`);
    }
  }

// create Student class and some value inheritance from Parent class
  class Student extends Person{
    constructor(name: string, age: number, address: string){
        super(name, age, address)
    }
  }

  const student1 = new Student('Morshed Alam', 26, 'ctg')
  console.log(student1.getSleep(4));
  

//   create Teacher CLass -> 

  class Teacher extends Person{
    designation: string
    constructor(name: string, age: number, address: string, designation: string){
        super(name, age, address)
        this.designation = designation
    }
    takeClass(numOfClass: number){
        console.log(`${this.name} will take ${numOfClass}`); 
    }
  }

  const teacher1 = new Teacher('Nasir', 45, 'ctg', 'Professor')
  console.log(teacher1.takeClass(3));
  

  //
}

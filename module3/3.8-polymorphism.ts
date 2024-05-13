{
  //  Polymorphism -> kono ekti class er kono method jodi kono karone change hoye jai theke polymorphism bole. Niche get method er name same but output different.

  class Person {
    getSleep() {
      return console.log("I am sleeping 8 hours in a day.");
    }
  }

  class Student extends Person {
    getSleep() {
      return console.log("I am sleeping 7 hours in a day.");
    }
  }

  class Developer extends Person {
    getSleep() {
      return console.log("I am sleeping 6 hours in a day.");
    }
  }

  const getSleepingHours = (param: Person) => {
    param.getSleep();
  };

  const person1 = new Person();
  const person2 = new Student();
  const person3 = new Developer();

  getSleepingHours(person1)
  getSleepingHours(person2)
  getSleepingHours(person3)

  //
}

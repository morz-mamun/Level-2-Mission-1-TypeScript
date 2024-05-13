{
  // Abstraction in OOP -> There is two way -> 1. use Interface 2. use abstract class

  // Abstraction using Interface ->

  // get idea
  interface Vehicle1 {
    startEngine(): void;
    stopEngine(): void;
    move(): void;
  }

  //   here the implementation part.
  class Car1 implements Vehicle1 {
    startEngine(): void {
      console.log("I am start the car engine.");
    }

    stopEngine(): void {
      console.log("I am stop the car engine.");
    }
    move(): void {
      console.log("I am move the car.");
    }

    test() {
      console.log("I am test the car condition.");
    }
  }

  const toyotaCar = new Car1();
  toyotaCar.startEngine();

  //   Abstraction using abstract class -> amon ekta class banate hobe jake baki class golo follow korbe.

  // idea
  abstract class Car2 {
    abstract startEngine(): void;
    abstract stopEngine(): void;
    abstract move(): void;
    test() {
      console.log("I am test the car condition.");
    }
  }

//   here the implementation
  class ToyotaCar extends Car2 {
    startEngine(): void {
      console.log("I am start the car engine.");
    }

    stopEngine(): void {
      console.log("I am stop the car engine.");
    }
    move(): void {
      console.log("I am move the car.");
    }
  }

  const car5 = new ToyotaCar()
  //
}

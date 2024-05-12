{
  // Static

  class Counter {
    static count: number = 0;

    static increment() {
      //   return (this.count = this.count + 1);
      return (Counter.count = Counter.count + 1);
    }
    static decrement() {
      //   return (this.count = this.count - 1);
      return (Counter.count = Counter.count - 1);
    }
  }

//   const instance1 = new Counter();
//   console.log(instance1.increment());
  console.log(Counter.increment()); // static -> don't need any instance when use static keyword

//   const instance2 = new Counter();
  console.log(Counter.increment());

  //
}

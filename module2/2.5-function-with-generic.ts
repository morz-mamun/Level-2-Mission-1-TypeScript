{
  // function with generic

  const createArray = (param: string): string[] => {
    return [param];
  };

  const res1 = createArray("Bangladesh"); // it's will return a string array

  const createArrayWithGeneric = <T>(param: T): T[] => {
    return [param];
  };

  const res2 = createArrayWithGeneric<string>("Bangladesh");

  interface User {
    id: number;
    name: string;
  }
  const res3 = createArrayWithGeneric<User>({ id: 123, name: "Morshed" });

  //   Example
  const createArrayWithTuple = <T, Q>(param1: T, param2: Q) : [T, Q] => {
    return [param1, param2];
  };

  const res4 = createArrayWithTuple<string, number>('Bangladesh', 123)

  interface Person{
    name: string;
    email: string;
    roll: number
  }
  const res5 = createArrayWithTuple<string, Person>('Bangladesh', {name: 'Morshed', email: 'a@gmail.com', roll: 12})


  // Example 

   const addCourseToStudent = <T>(student: T) => {
    const course = 'Next Level Web Development'
    return {
        ...student,
        course
    }
   }

   interface Student{
    name: string;
    email: string;
    devType?: string;
    watch?: string
   }

   const student1 = addCourseToStudent<Student>({name: 'Mr.X', email: 'x@gmail.com', devType: 'NLWD'})
   const student2 = addCourseToStudent<Student>({name: 'Mr.y', email: 'y@gmail.com', watch: 'Apple Watch'})
}

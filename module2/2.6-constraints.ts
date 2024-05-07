{
  // constraints ->

  const addCourseToStudent = <
    T extends { id: number; name: string; email: string }
  >(
    student: T
  ) => {
    const course = "Next Level Web Development";
    return {
      ...student,
      course,
    };
  };

  const student1 = addCourseToStudent<{
    id: number;
    name: string;
    email: string;
    devType: string;
  }>({ id: 111, name: "Mr.X", email: "x@gmail.com", devType: "NLWD" });

  const student2 = addCourseToStudent({
    id: 222,
    name: "Mr.y",
    email: "y@gmail.com",
    watch: "Apple Watch",
  });

  const student3 = addCourseToStudent({ id: 333, name: 'Mr.Z', email: 'z@gmail.com', emni: "emni" });
}

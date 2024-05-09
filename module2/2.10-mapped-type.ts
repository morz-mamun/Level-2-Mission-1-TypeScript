{
  //mapped type in typescript

  // normal map in javascript ->
  const arrayOFNumber: number[] = [1, 2, 3];

  const arrayOFString: string[] = arrayOFNumber.map((number) =>
    number.toString()
  );

  console.log(arrayOFString);

  //typescript mapped type ->

//   type AreaNumber = {
//     height: number;
//     width: number;
//   };

//   type Height = AreaNumber["height"]; // look up type

//   type AreaString <T> = {
//     [key in keyof T]: T[key]; // this is mapped type
//   };

//   const area1 : AreaString<{height: string; width: number}> = {
//     height: '100',
//     width: 50
//   }

  type AreaString = {
    height: string;
    width: string
  }

  type AreaNumber <T> = {
    [key in keyof T] : T[key] // look up type and mapped type
  }

  const area1 : AreaNumber<{height: string; width: number}> = {
    height: '100',
    width: 50
  }
}

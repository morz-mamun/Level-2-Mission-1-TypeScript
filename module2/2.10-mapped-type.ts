{
  //mapped type in typescript

  // normal map in javascript ->
  const arrayOFNumber: number[] = [1, 2, 3];

  const arrayOFString: string[] = arrayOFNumber.map((number) =>
    number.toString()
  );

  console.log(arrayOFString);

  //typescript mapped type ->

  type AreaString = {
    height: string;
    width: string;
  };

  type Height = AreaString["height"]; // look up type

  type AreaNumber<T> = {
    [key in keyof T]: T[key]; // look up type and mapped type
  };

  const area1: AreaNumber<{ height: string; width: number }> = {
    height: "100",
    width: 50,
  };
}

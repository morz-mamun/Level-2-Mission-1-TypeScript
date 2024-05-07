{

  // type assertion -> define any variable type with 'as' and make sure the type of the variable is called type assertion.

  let anything: any;

  anything = "Next level web development";

  anything = 222;

  //   (anything as string).

  const kgToGm = (value: string | number) : string | number | undefined => {
    if (typeof value === "string") {
      const convertedValue = parseFloat(value) * 1000;
      return convertedValue
    }
    if(typeof value === 'number'){
        return value*1000
    }
  };

  const result1 = kgToGm(1000) as number // it is type assertion
  const result2 = kgToGm('1000') as string // it is type assertion



  type CustomMsg = {
    message: string
  }

  try{

  }catch(error){
    console.log((error as CustomMsg).message);
    
  }

}

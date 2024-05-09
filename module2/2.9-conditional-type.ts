{
  // conditional type

  type a1 = null;
  type b1 = string;

  type x = a1 extends number ? true : false; // conditional type
  type y = a1 extends number ? true : b1 extends undefined ? true : any; // this is also a conditional type

  //   example-> 

  type Sheik = {
    bike: string;
    car: string;
    ship: string;
    plane: string
  }

  type CheckVehicle<T> = T extends keyof Sheik ? true : false
   
  type hasBike = CheckVehicle<'plane'>
}

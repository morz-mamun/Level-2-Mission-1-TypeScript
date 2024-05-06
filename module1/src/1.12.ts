{
    // nullable type 

    const searchName = (name: string | null) => {
        if(name){
            console.log('Searching...');
        }else{
            console.log('Name is not found');
            
        }
    }
    searchName(null)


    /*unknown typeof */ 

     const getSpeedInMeterPerSecond = (value: unknown) => {
        if(typeof value === 'number'){
            const convertedSpeed = (value * 1000)/3600
            console.log(`The speed is ${convertedSpeed} ms^-1`);
            
        }

        else if(typeof value === 'string') {
            const [valueNum, unit] = value.split(' ')
            const convertedSpeed = (parseFloat(valueNum) * 1000)/3600
            console.log(`The speed is ${convertedSpeed} ${unit}`);
            
        }
        else {
            console.log('wrong input');
            
        }
     }

     getSpeedInMeterPerSecond(null)


    //  never type -> if we see a function don't return anything, however it's throw something that function type will be never.


     const throwError = (msg: string) : never => {
        throw new Error(msg)
     }

     console.log(throwError('Galti se mistake hogaya'));
     
}
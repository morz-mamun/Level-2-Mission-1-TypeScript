{
    /*
     * we can used question mark (?) as a ternary operator || optional chaining || nullish coalescing operator
    */  

    const age: number = 18

    if(age >= 18) {
        // console.log('Adult');
    }else{
        // console.log('Not Adult');
        
    }


    /*ternary operator*/ 

    const isAdult = age >= 18 ? 'Adult' : 'Not Adult'
    // console.log({isAdult});


    /* nullish coalescing operator
    * we use it only when we have to make a decision based on null and undefined value
    * and it's works only on null and undefined 
    */
      

    const isAuthenticated = undefined

    const result1 = isAuthenticated ?? 'Guest' // nullish coalescing operator 
    const result2 = isAuthenticated ? isAuthenticated : 'Guest' // ternary operator 
    // console.log({result1}, {result2});
    
    type User ={ 
        name: string;
        address: {
            city: string;
            road: string;
            presentAddress: string;
            permanentAddress?: string
        }
    }

    const user : User = {
        name: 'Morshed',
        address: {
            city: 'ctg',
            road: 'Awesome road', 
            presentAddress: 'ctg town'
        }
    } 

    const permanentAddress = user?.address?.permanentAddress ?? 'No Address Found'
    console.log({permanentAddress});
    
    
}
{
    // Type guard in typescript. using typeof and in operator. 
    

    // typeof guard -> 

    type Params = string | number
    
    const add = (param1: Params, param2: Params) : Params => {
        if(typeof param1 === 'number' && typeof param2 === 'number'){
            return param1 + param2
        } else {
            return param1.toString() + param2.toString()
        }
    }

    const result1 = add('2', 3)
    console.log(result1);

    
    // in guard 

    type NormalUser = {
        name: string
    }

    type AdminUser = {
        name: string;
        role: 'Admin'
    }

    // execution part -> 
    const getUser = (user: NormalUser | AdminUser) => {
        if('role' in user){
            console.log(`My name is ${user.name} and role is ${user.role}.`);
        } else{
            console.log(`My name is ${user.name}.`);
        }
    }

    const normalUser : NormalUser = {
        name: 'Mr. Normal Bhai'
    }

    const adminUser : AdminUser = {
        name: 'Mr. Admin Bhai',
        role: 'Admin'
    }

    getUser(adminUser)
    getUser(normalUser)
    
    

    // 
}
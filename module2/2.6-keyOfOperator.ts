{
    // generic constraint with keyof operator

    type Vehicle = {
        bike: string;
        car: string;
        ship: string
    }

    type Owner = 'bike' | 'car' | 'ship' // it is union type

    type Owner1 = keyof Vehicle // keyof operator make a union type from specific type.

    const person1 : Owner1 = 'car'

    const user = {
        name: 'Morshed',
        age: 26,
        address: 'ctg'
    }

   const getPropertyValue = <X, Y extends keyof X> (obj: X, key: Y) => {
        return obj[key]
   }

   const result1 = getPropertyValue(user, 'name')

    
}
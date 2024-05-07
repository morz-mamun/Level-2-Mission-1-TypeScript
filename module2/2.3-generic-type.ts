{
    // generic type -> if we create a type and reused when we need that will be called generic type

    type GenericArray<T> = Array<T>   // this is generic type

    // const rollNumbers : number[] = [1,2,3]
    // const rollNumbers : Array<number> = [1,2,3]
    const rollNumbers : GenericArray<number> = [1,2,3]

    // const mentors : string[] = ['Mr.X', 'Mr.Y']
    // const mentors : Array<string> = ['Mr.X', 'Mr.Y']
    const mentors : GenericArray<string> = ['Mr.X', 'Mr.Y']

    // const bollArray : boolean[] = [true, false]
    // const bollArray : Array<boolean> = [true, false]
    const bollArray : GenericArray<boolean> = [true, false]

    // generic type use in Array of object -> 

    type User = {
        name: string;
        age: number
    }

    const user : GenericArray<User> = [
        {
            name: 'Morshed',
            age: 25
        },
        {
            name: 'Delwar',
            age: 29
        }
    ]

    // generic tuple -> 

    type GenericTuple<X,Y> = [X, Y]

    const man : GenericTuple<string, string> = ["Mr.X", "Mr.Y"]

    const userWithId : GenericTuple<number, {name: string, email: string}> = [123, {name: 'Morshed', email: "a@gmail.com"}]
}
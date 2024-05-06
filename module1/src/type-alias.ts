{
    // type alias -> which means give name of types

    type Student = {
        name: string;
        age: number;
        contactNo?: string;
        gender: string;
        address: string
    }
    
    const student1 : Student = {
        name: 'Mamun',
        age: 25,
        contactNo: '01851565648',
        gender: 'male',
        address: 'ctg'
    }
    const student2 : Student = {
        name: 'Delwar',
        age: 23,
        gender: 'male',
        address: 'noakhali'
    }
    const student3 : Student = {
        name: 'Hridoy',
        age: 25,
        contactNo: '01851565654',
        gender: 'male',
        address: 'dhk'
    }


    type User = string
    const user: User = 'Morshed'

    // type alias in function

    type Add = (a: number, b: number) => number

    const add : Add = (a, b) => a + b
}
// Normal function 

function add(num1 : number, num2 : number = 10) : number{
    return num1 + num2
}

add(10)

// Arrow function

const addArrow = (num1: number, num2: number) : number => num1 + num2

// object --> function --> method
// when function write in a object then it called method. 

const poorUser = {
    name : "Mamun",
    balance: 0,
    addBalance(balance: number){
        return `My new Balance is : ${this.balance + balance}.`
    }
}

// call back function

const arr : number[] = [1, 4, 10]

const newArr : number[] = arr.map((elm : number) : number => elm * elm)
{
    // getter and setter modifier
    
    class BankAccount {
       readonly id: number;
        name: string;
       protected _balance: number;

        constructor(id: number, name: string, balance: number){
         
            this.id = id
            this.name = name
            this._balance = balance
        }

        set deposit(amount : number){
            this._balance = this._balance + amount
        }
        // addDeposit(amount : number){
        //     this._balance = this._balance + amount
        // }

        get Balance(){
            return this._balance
        }
    }

    class StudentAccount extends BankAccount{
        test(){      // this a test() method
            this._balance
        }
    }

    const goriberAccount = new BankAccount(111, 'Morshed', 200)
    
    const myBalance = goriberAccount.Balance
    goriberAccount.deposit = 50


    // 
}
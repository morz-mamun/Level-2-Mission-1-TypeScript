{
    // Access Modifiers 
    
    class BankAccount {
       readonly id: number;
        name: string;
       protected _balance: number;

        constructor(id: number, name: string, balance: number){
         
            this.id = id
            this.name = name
            this._balance = balance
        }

        addDeposit(amount : number){
            this._balance = this._balance + amount
        }

        getBalance(){
            return this._balance
        }
    }

    class StudentAccount extends BankAccount{
        test(){      // this a test() method
            this._balance
        }
    }

    const goriberAccount = new BankAccount(111, 'Morshed', 200)
    


    // 
}
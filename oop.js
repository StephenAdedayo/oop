// classes

class Car{
   constructor(name, model, year){
    this.name = name,
    this.model = model,
    this.year = year
   }


   displayInfo(){
    return (`this is a ${this.name}, ${this.model} that was developed in ${this.year}`)
   }




}

class User{
    constructor(fullName, email, phone, password){
        this.fullName = fullName,
        this.email = email,
        this.phone =phone,
        this.password = password
    }

    login(){
        return(`${this.fullName} has logged in successfully`)
    }

    logOut(){
        return(`${this.fullName} has logged out succesfully `)
    }
}

// abstraction

const myCar = new Car('Mercedez', 'GLE', 2024)
const myCar2 = new Car('Tesla', 'X-6', 2024)
const myUser = new User('Stephen', 'alu@gmail.com', 8143184639, 'StephenTrent')


console.log(myCar);
console.log(myCar2);
console.log(myCar2.displayInfo());

console.log(myUser);
console.log(myUser.logOut());


// encapsulation
class BankAccount{
    #balance
    constructor(name, phone, email, initialBalance){
     this.name = name,
     this.phone = phone,
     this.email = email,
     this.accNumber = phone
     this.#balance = initialBalance
     
    }

    deposit(amount){
      if(amount > 50){
        this.#balance += amount  
      }
    }

    withdraw(amount){
      if(amount >= 50 && amount <= this.#balance){
        this.#balance -= amount
      } else{
        console.log('Insufficient Funds');
        
      }
    }

    getBalance(){
    return (this.#balance);
     
    }
}


const myBankAccount = new BankAccount('Alu Stephen', 8132535158, 'alustephen@gmail.com', 0)

console.log(myBankAccount);
myBankAccount.deposit(5000)
console.log(myBankAccount.getBalance());
myBankAccount.withdraw(3000)
console.log(myBankAccount.getBalance());
myBankAccount.withdraw(6000)
console.log(myBankAccount.getBalance());


// inheritance

class SavingAccount extends BankAccount{
   constructor(name, phone, email, initialBalance, interestRate ){
    super(name, phone, email, initialBalance)
    this.interestRate = interestRate
   }

   applyInterest(){
    const interest = this.getBalance() * this.interestRate/100
    this.deposit(interest)
    return console.log(`interest of ${interest} has been added to your account `);
    
   }
}

const mySavingsAccount = new SavingAccount('Alu Stephen', 8143184639, 'alu@gmail.com', 5000, 7.8)

console.log(mySavingsAccount);
mySavingsAccount.deposit(4000)

mySavingsAccount.applyInterest()
console.log(mySavingsAccount.getBalance());


class FixedAccount extends BankAccount{
    constructor(name, phone, email, initialBalance, interestRate, lockPeriod){
     super(name, phone, email, initialBalance)
     this.interestRate = interestRate,
     this.lockPeriod = lockPeriod
    }

    applyInterest(){
        const interest = this.getBalance()  * this.interestRate/100
        this.deposit(interest)
        return console.log(`interest of ${interest} will be added after ${this.lockPeriod} months`);    
    }

    withdraw(amount){
       console.log(`withdrawals are not allowed during  ${this.lockPeriod} months`);
       
    }
}


const myFixedAccount = new FixedAccount('Alu Stephen', 8143184639, 'alustephen@gmail.com', 9702, 7.8, 24)

myFixedAccount.deposit(3000)
myFixedAccount.applyInterest()
myFixedAccount.withdraw(3000)
console.log(myFixedAccount.getBalance());










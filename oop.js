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



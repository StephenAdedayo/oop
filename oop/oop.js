class Car{
   constructor(name, model, year){
    this.name = name,
    this.model = model,
    this.year = year
   }


   displayInfo(){
    return (`this is a ${this.name}, ${model} that was developed in ${this.year}`)
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

const users = new User()
class User {
    constructor (username){
        this.username = username
    }

    logMe(){
        console.log(`Username:${this.username}`)
    }

    static createId(){
        return `123`
    }

}

class Teacher extends User{
    constructor (username,email){
    super(username)
        this.email = email
}

}

const riken = new User("riken","rikenpatel@riken.com")
const ramesh = new Teacher("Ramesh","ramesh121@example.com")

// console.log(ramesh.createId()) cant create id due to static properties
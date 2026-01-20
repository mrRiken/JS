function multiplyBy5(num){
    return num*5
}

multiplyBy5.power = 2

// console.log(multiplyBy5(8))
// console.log(multiplyBy5.power)


function createUser(username, score){
    this.username= username
    this.score=score
}


createUser.prototype.increment= function(){
    this.score++
    return this.score
}

createUser.prototype.showDetails = function(){
    console.log(this.username,this.score)
}

const john = new createUser("John",52)
const doe = new createUser("Doe", 61)

console.log(john.score)
john.increment()
console.log(john.score)
doe.showDetails()
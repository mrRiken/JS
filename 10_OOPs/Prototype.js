
let myName = "   Riken   "

String.prototype.trueLength = function(){
    let answer = (this.trim()).length
    return answer
}

let myLength = myName.trueLength()


console.log(myLength)
const myCar = {
    model:"Miura",
    isDiscontinued:true
}

Object.defineProperties(myCar, {
  model: {
    writable: false,
    enumerable: false
  },
  isDiscontinued: {
    writable: false,
    enumerable: false
  }
});
myCar.isDiscontinued = false
console.log(myCar)
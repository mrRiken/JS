//  for of
console.log("------------------ Arrays ------------------------")
// Arrays
const arr = [11,22,33,44,55]

for (const element of arr){
    console.log(element)
}
console.log("------------------ Strings ------------------------")
// Strings
const myStr = "kjsg,23 40 dfj*4 3j gsd";
for (const letter of myStr){
    console.log(letter)
}
console.log("-------------------- Maps ----------------------")
// Maps
const map = new Map()
map.set("IN","India")
map.set("UK","United Kingdom")
map.set("CA","Canada")

for (const [key,value] of map){
    console.log(key," | ",value)
}
console.log("------------------- Objects after Arrays -----------------------")
// Objects
const car = {
    manufacturer: "BMW",
    model: "M5 Competition",
    color: "Frozen Marina Bay Blue",
    engine: "4.4L V8",
    hp: 617,
    isQuattro: false
};
for (const element of Object.entries(car)){
    console.log(element)
}
console.log("------------------------------------------")
for (const value of Object.values(car)){
    console.log(value)
}
console.log("------------------------------------------")
for (const key of Object.keys(car)){
    console.log(key)
}

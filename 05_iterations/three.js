// loops in objects

const car = {
    manufacturer: "Mercedes-Benz",
    model: "AMG GT 63 S",
};

for (const key in car){
    console.log(car[key])
}

const carInventory = [
    {
        "brand": "BMW",
        "model": "M5 CS",
    },
    {
        "brand": "Mercedes-Benz",
        "model": "AMG GT Black Series",
    }]

for (const element in carInventory){
    console.log(carInventory[element])
}

//  Maps for in not possible

const map = new Map()
map.set("brand", "BMW")
map.set("model", "M5 CS")

for (const key in map){
    console.log(key) // blank since not iterable
}
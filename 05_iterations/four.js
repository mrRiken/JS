const carBrands = [
    "BMW",
    "Mercedes-Benz",
    "Audi",
    "Porsche",
    "Lamborghini"
];

 carBrands.forEach((name)=>{
    console.log(name)
 })

 function printFunction(value){
    console.log(value)
 }

 carBrands.forEach(printFunction)

 const carInventory = [
    {
        "id": "DE-01",
        "brand": "BMW",
        "model": "M5 CS",
        "color": "Frozen Deep Green",
        "specs": {
            "engine": "4.4L V8",
            "hp": 627,
            "zeroToSixty": 2.9
        },
        "inStock": true
    }
];

carInventory.forEach(printFunction) 


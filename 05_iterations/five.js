const data = [11, 22, 33, 44, 55, 66, 77, 88];
let a = data.filter((num) => {
  if (num > 43 && num < 53) {
    return num;
  }
});

console.log(a);

const newNums = [];

data.forEach((num) => {
  if (num > 43 && num < 53) {
    newNums.push(num);
  }
});
console.log(newNums);
 

const carInventory2 = [
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
    },
    {
        "id": "DE-02",
        "brand": "Mercedes-Benz",
        "model": "AMG GT Black Series",
        "color": "Magma Beam Orange",
        "specs": {
            "engine": "4.0L V8",
            "hp": 720,
            "zeroToSixty": 3.1
        },
        "inStock": false
    },
    {
        "id": "IT-01",
        "brand": "Lamborghini",
        "model": "Huracán Sterrato",
        "color": "Arancio Borealis",
        "specs": {
            "engine": "5.2L V10",
            "hp": 602,
            "zeroToSixty": 3.4
        },
        "inStock": true
    },
    {
        "id": "GB-01",
        "brand": "McLaren",
        "model": "750S",
        "color": "Aurora Blue",
        "specs": {
            "engine": "4.0L V8",
            "hp": 740,
            "zeroToSixty": 2.7
        },
        "inStock": true
    },
    {
        "id": "JP-01",
        "brand": "Nissan",
        "model": "GT-R Nismo",
        "color": "Ultimate Silver",
        "specs": {
            "engine": "3.8L V6",
            "hp": 600,
            "zeroToSixty": 2.5
        },
        "inStock": false
    }
];

const cars = carInventory2.filter((carObj) => {

    if (carObj.specs.hp >=720){
            console.log({[carObj.brand]:carObj.model})

    }
    
})
//  chaining
newData = data
            .map((num) => num+10)
            .map((num) => num+5)
            .filter((num) => ((num-15)>=54))

console.log(newData)
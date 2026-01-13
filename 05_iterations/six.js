let myNums = [11,22,33,44,55,66,77,88]

let myTotal = myNums.reduce((acc,currval) =>{
    console.log(`acc: ${acc} and currval ${currval}`)
    return acc+currval

},0)

console.log(myTotal)

let myArr = [2,3,4,5,6,7,8,9,10]
let m = []
myLast = myArr.reduce((acc,currval) => {
    console.log(acc,currval)
    return acc+currval
},0)

const shoppingCart = [
    {
        id: 1,
        product: "Mechanical Keyboard",
        price: 89.99,
        quantity: 1,
        category: "Electronics"
    },
    {
        id: 2,
        product: "Gaming Mouse",
        price: 45.00,
        quantity: 2,
        category: "Electronics"
    },
    {
        id: 3,
        product: "USB-C Cable",
        price: 12.50,
        quantity: 3,
        category: "Accessories"
    },
    {
        id: 4,
        product: "Monitor Stand",
        price: 35.00,
        quantity: 1,
        category: "Furniture"
    },
    {
        id: 5,
        product: "Webcam",
        price: 59.99,
        quantity: 1,
        category: "Electronics"
    }
];

const myCharge = shoppingCart.reduce((acc,item) => item.price+acc,0)

console.log(myCharge.toPrecision(5))
const myNums=[1,2,3]
// const myTotal = myNums.reduce(function(acc,curval){
//     console.log(`acc:${acc} and curval: ${currval}`);
//     return acc+ currval
// },0)
const myTotal=myNums.reduce((acc,curr)=>acc +curr,0)
// console.log(myTotal);
const shoppingCart=[
    {
        itemName:"js course",
        price:20000
    },
    {
        itemName:'py course',
        price:999
    },
    {
        itemName:"data science course",
        price:1299
    },
]
const priceTOpay= shoppingCart.reduce((acc,item)=>acc+ item.price,0)
console.log(priceTOpay);
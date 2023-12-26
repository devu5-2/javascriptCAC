// function sayMyName(){
//     console.log("H");
//     console.log("I");
//     console.log("T");
//     console.log("E");
//     console.log("S");
//     console.log("H");
// }
// sayMyName()
function addTwonumbers(number1,number2){
    let result = number1+ number2
    return result
    return number1 +number2
}
const result = addTwonumbers(3,5)
console.log("result",result);
function loginUserMessage(username="sam"){
    if(!username){
        console.log("please enter a username");
        return 
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("dev"))
console.log(loginUserMessage("dev"))

function calculateCartPrice(val1,val2,...num1){
return num1
}
console.log(calculateCartPrice(200,400,500,2000))
const user={
    username:"dev",
    prices:199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject({
    username:"dev",
    price:399
})
const myNewArray=[200,400,100,600]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue([200, 400, 500, 1000]));
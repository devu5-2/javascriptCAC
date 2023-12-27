const user={
    username:"dev",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.username},welcome to website`);
        console.log(this);
    }
}
user.welcomeMessage()
user.username="shankar"
user.welcomeMessage()
// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "hitesh"
    console.log(this);
}


// chai()
// const addTwo=(num1,num2)=>{
//     return num1+num2
// }
//  
// console.log(addTwo(3,4))
// const myArray=[2,3,4,5,6]
// myArray.forEach()

// IIFE********************************
(function chai(){
    console.log(`DB connected`);
})();
((name)=>{
    console.log(`Db connected two ${name}`)
})('dev')
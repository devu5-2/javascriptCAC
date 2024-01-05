let myHeros = ["thor","spiderman"]
let heroPower={
    thor:"hammer",
    spiderman:"sling",

getSpiderPower: function(){
    console.log(`spidy power is ${this.spiderman}`);
}
}
Object.prototype.dev= function(){
    console.log(`dev is present in all object`);
}
Array.prototype.heyDev = function(){
    console.log(`dev says hello`);
}
// heroPower.dev()
// myHeros.dev()
// myHeros.heyDev()
// heroPower.heyDev()
const User={
    name:'chai',
    email:"chai@google.com"
} 
const Teacher={
    makeVideo:true
}
const TeachingSupport={
    isAvailable: false
}
const TASupport={
    makeAssignment:"js assignment",
    fullTime:true,
    __proto__:TeachingSupport
}
Teacher.__proto__= User
Object.setPrototypeOf(TeachingSupport,Teacher)
let anotherUsername="chaiaurcode   "
String.prototype.trueLength= function(){
    console.log(`${this}`);
    console.log(`true length is ${this.trim().length}`);
}
anotherUsername.trueLength()
"dev".trueLength()
"icetea".trueLength()
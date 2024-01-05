const user={
    username:"hitesh",
    loginCount:8,
    signedIn:true,
    getUserDetails: function(){
        console.log(this);
    }
}
function User(username,loginCount,isLoggedIn){
    this.username= username;
    this.loginCount= loginCount;
    this.isLoggedIn= isLoggedIn;
    this.greeting = function(){
        console.log(`welcome ${this.username}`);
    }
    return this
}
const userOne= new User("dev",12,true)
const userTwo= new User("chai aur code",11,false)
console.log(userOne.constructor);
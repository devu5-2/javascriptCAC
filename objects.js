// const mySym= Symbol("key1")
// const jsuser={
//     name:"dev",
//     "full name":"dev shankar",
//     [mySym]:"mykey1",
//     age:18,
//     location:"jaipur",
//     email:"dev@google.com",
//     isLoggedIn:false,
//     lastLoginDays:["monday","tuesday"]
// }
// console.log(jsuser.email)
// console.log(jsuser["email"])
// console.log(jsuser["full name"])
// console.log(jsuser[mySym])

// jsuser.email="dev@gooogle.com"
// jsuser.email="dev@yahoo.com"
// jsuser.greeting=function(){
//     console.log("hello dev bhai");
// }
// jsuser.greetingtwo=function(){
//     console.log(`hello bhai,${this.name}`);
// }
// console.log(jsuser.greeting());
// console.log(jsuser.greetingtwo());

// PART2***********************
const tinderUser={}
tinderUser.id="123abc"
tinderUser.name="saambahadur"
tinderUser.isLoggedIn=false
// console.log(tinderUser);
const regularUser={
    email:"some@gmail.com",
    fullName:{
        userfullname:{
            firstname:"dev",
            lastname:"shankar"
        }
    }
}
// console.log(regularUser.fullName.userfullname.firstname);

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj3={5:"a",6:"b"}
const obj4={...obj1,...obj2}
console.log(obj4);
const users=[
    {
        id:1,
        email:"dev@gmail.com"
    },
    {
        id:1,
        email:"shankar@gmail.com"
    },
    {
        id:1,
        email:"s@gmail.com"
    },
]
users[1].email
//  console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course={
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"dev"
}
course.courseInstructor
const{courseInstructor:instructor}=course
console.log(instructor);

// {
//     "name": "dev",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]
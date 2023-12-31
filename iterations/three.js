const arr=[1,2,3,4,5]
for(const num of arr){
    console.log(num);
}
const greetings="hello world"
for(const greet of greetings){
    console.log(`each char is${ greet}`)
}

// MAPS 
const map= new Map()
map.set('IN',"india")
map.set('usa',"united states of america")
map.set('fr',"france")
map.set('In',"india")
console.log(map);

for(const [key,value]of map){
    console.log(key,':- ',value);
}
const myObjects={
    game1:'nfs',
    game2:'spiderman'
}
for(const[key,value]of myObjects){
    console.log(key,':-',value);
}
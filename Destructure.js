const person = {Name: 'Jack Willams', age: 17, Job: 'Facebooker', Address: "Rajarbagh", Phone: 01777500225, friends: ['Samir', 'Faridul', 'Rahim', 'Delport']};
//const Name = person.Name;
// const { age, Name, Address } = person;
// console.log(Name, age, Address);
const friends = ['Shakib Khan', 'Amir Khan', 'Salman Khan', 'Sharukh Khan'];
const [chotoFriend, nextFriend, ...remainingFriend] = friends;
console.log(remainingFriend);
 const complexObject ={
     name : "Abc",
     info : {
         age : 'Sixteen',
         live : 'Kalabagan'
     }   
 }
 const { live } = complexObject.info;
     console.log(live);
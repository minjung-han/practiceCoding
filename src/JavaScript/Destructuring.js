
let [x, y] = [1, 2];

console.log(x); // 1
console.log(y); // y


let users = ['Mike', 'Tony', 'Maria'];

let str = "Mike-Tony-Maria";

let [user1, user2, user3] = str.split("-");

console.log(user1); // Mike
console.log(user2); // Tony
console.log(user3); // Maria

let [a,b,c] = [1,2];
// => c는 undefined

let [a=3, b=4, c=5] = [1,2];

console.log(a); // 1
console.log(b); // 2
console.log(c); // 5


let [user1, , user2] = ['Mike', 'Tony', 'Maria', 'Alex'];

console.log(user1); // 'Mike'
console.log(user2); // 'Maria'


let user = {name : 'Maria', age: 27};
let {name: userName, age: UserAge} = user;

console.log(userName);  // 'Maria'
console.log(UserAge);  // 27

console.log(name);  // 'Maria'
console.log(age);  // 27


let name = user.name;
let age = user.age;



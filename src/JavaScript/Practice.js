
// join( )
let arr = ["안녕", "나는", "철수야"];

let result = arr.join("  ");

console.log(result);    // 안녕  나는  철수야

// split ( )
const users = "Mike,Jamie,Alex,Tony";

const result = users.split(",");

console.log(result);    // ["Mike","Jamie","Alex","Tonu"]


// reverse( )
let arr = [1,2,3,4,5];

arr.reverse();  // [5,4,3,2,1]


let user = {
    name: "Mike",
    age: 30,
};

let userList = ["Mike","Tony","Jamie"];


// find( )
const result = arr.find((item) => {
    return item % 2 === 0;
});

console.log(result);    // 2


// map( )
let userList = [
    {name: "Mike", age: 30},
    {name: "Alex", age: 23},
    {name: "Jane", age: 12}
];

let newUserList = userList.map((user,index) => {
    return Object.assign({}, user, {
        isAdult : user.age > 19
    });
});

console.log(newUserList);   
/* 0: {name: "Mike", age: 30, isAdult: true}  
   1: {name: "Alex", age: 23, isAdult: true}
   2: {name: "Jane", age: 12, isAdult: false}
*/

console.log(userList);
/*
    0: {name: "Mike", age: 30},
    1: {name: "Alex", age: 23},
    2: {name: "Jane", age: 12}
*/

const result = userList.find((user) => {
    if(user.age < 19) {
       return true;
    }
    return false;
});


console.log(result);    // {name: "Jane", age: 12}

// includes( )
let arr =[1,2,3,7];

arr.includes(2);    // true
arr.includes(4);    // false


// concat( )
arr.concat([3,4]);  //[1, 2, 3, 4]
arr.concat([3,4], [5,6]);  //[1, 2, 3, 4, 5, 6]
arr.concat([3,4], 5, 6);  //[1, 2, 3, 4, 5, 6]

console.log(arr2);  //[1, 2, 3, 4, 5]

// slice( )
arr.slice(1,4); //  [2,3,4]

// splice( )
let content = ["나는", "영수", "입니다"];

arr.splice(1, 0, "대한민국", "경찰관");

console.log(content);   // ["나는", "대한민국", "경찰관", "영수", "입니다"]


// forEach( )
let users = ["Jane", "Alex", "Christina"];

users.forEach((name, index) => {
    console.log(name);  // Jane, Alex, Christina
    console.log(`${index}, ${name}`);   // 0. Jane, 1.Alex, 2.Christina
});

// indexOf( )
let indexes = [1,2,3,4,5,1,2,3];
arr.indexOf(3); // 2





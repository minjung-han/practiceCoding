
/*
    reduce( )
    (누적 계산값, 현재값) => { return : 계산값 }
*/ 
let arr4 = [1,2,3,4,5];

// 배열의 모든 수 합칠 때 for, for of, forEach 사용한다

let result = 0;
arr.forEach(num => {
    result += num;
})

console.log(result);    // 15

const result = arr.reduce((prev, cur) => {
    return prev + cur;
}, 0);

let userList = [
    {name: "Mike", age:30 },
    {name: "Alex", age: 12 },
    {name: "Jane", age: 28 },
    {name: "Harry", age: 60 },
    {name: "Jamie", age: 25 },
    {name: "Tony", age: 47 },
    {name: "Steve", age: 7 },
]

let result = userList.reduce((prev, cur) => {
    if(cur.age > 19) {
        prev.push(cur.name);
    }
    return prev;
}, []);

console.log(result);   

/*
    0: "Mike"
    1: "Jane"
    2: "Harry"
    3: "Jamie"
    4: "Tony"
*/

let result = userList.reduce((prev, cur) => {
    if(cur.name.length === 4) {
        prev.push(cur.name);
    }
    return prev;
}, []);

console.log(result);  // ["Mike", "Alex", "Jane", "Tony"]

// sort()

let arr = [1, 6, 2, 3, 4, 5];
arr.sort();
console.log(arr);   // [1,2,3,4,5,6]


let arr2 = ['a','e','f','d','b','c'];
arr2.sort();
console.log(arr2);  //['a','b','c','d','e','f']

let arr3 = [27, 8, 5, 13];

function fn(a, b){
    return a - b;
}

arr.sort(fn);

// 화살표 함수를 사용
arr3.sort((a, b) => {
    console.log(a,b);
    /*
        8 27
        5 8
        13 5
        13 8
        13 27
    */ 
    
    return a - b;
});
console.log(arr3);  // [5,8,13,27]

// Array.isArray( )

let user = {
    name: "Mike",
    age: 30,
};

let userList = ["Mike","Tony","Jamie"];

console.log(typeof user);   // object
console.log(typeof userList);   // object

console.log(Array.isArray(user));   // false
console.log(Array.isArray(userList));   // true

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





// function showName(name){
//     console.log(name);
// }

// showName('Maria');  // 'Maria'
// showName('Maria', 'John');  // ?


function sayName() {
    console.log(arguments.length);
    console.log(arguments[0]);
    console.log(arguments[1]);
}

sayName('Maria', 'John');

// 2
// 'Maria'
// 'John'

function showName(...names) {
    console.log(names);
}

showName(); // [ ]
showName('Maria');  // ['Maria']
showName('Maria', 'John');  // ['Maria', 'John']


/**
 * 나머지 매개변수
 * 전달받은 모든 수를 더해야 함
 */

function addNumbers(...numbers) {
    let result = 0;
    numbers.reduce((prev, cur) => {prev += cur});
    console.log(result);
}

addNumbers(1,2,3);  // 6
addNumbers(1,2,3,4,5,6,7,8,9,10);   // 55


/**
 * 나머지 매개변수
 * user 객체를 만들어주는 생성자 함수 만들기
 */
function User(name, age, ...skill) {
    this.name = name;
    this.age = age;
    this.skills = skills;
}

const user1 = new User('John', 28, 'html', 'css');
const user2 = new User('Maria', 32, 'React', 'JS');
const user3 = new User('May', 21, 'English', 'JS', 'React');

console.log(user1);
console.log(user2);
console.log(user3);

/**
 * {
 * "name": "John",
 * "age": 28,
 * "skills":[
 * "html",
 * "css"
 * ]
 * }
 * {
 * "name": "Maria",
 * "age": 32,
 * "skills":[
 * "React",
 * "JS"
 * ]
 * }
 * {
 * "name": "May",
 * "age": 21,
 * "skills":[
 * "English"
 * "JS",
 * "React"
 * ]
 * }
 */


// 전개 구문 : 배열

let arr1 = [1,2,3];
let arr2 = [5,6,7];

let result = [0, ...arr1, ...arr2, 8,9,10];

console.log(result);   // [1,2,3,5,6,7,8,9,10];


// 전개 구문 : 객체
let user = {name: 'John'};
let john = {...user, age: 28};

console.log(john);  // {name: "John", age: 28}


//전개 구문 : 복제
let user = {name: 'John', age: 28};
let user2 = {...user};

user2.name = "Janny";

console.log(user.name); // "John"
console.log(user2.name);    //"Janny"

// arr3을  [4,5,6,1,2,3]으로

let arr3 = [1,2,3];
let arr4 = [4,5,6];

// arr4.reverse().forEach(num => {
//     arr3.unshift(num);
// });

arr3 = [...arr4, ...arr3];

console.log(arr3);  //  [4,5,6,1,2,3];


let man = {name: 'John'};
let info = {age: 30};
let skills = ["JS", "React", "HTML"];
let lang = ["Korean", "Chinese", "English"];

// man = Object.assign({},
//     man,
//     info,
//     {
//         skills : []
//     }
//     )

// console.log(man);

/**{name: "John", age: 30, skills: []} */

// skills.forEach((item) => {
//     man.skills.push(item);
// });

// lang.forEach((item) => {
//     man.lang.push(item);
// });


// console.log(man);
// {name: "John", age: 30, 
// skills: [0: "JS", 1: "React", 2: "HTML", 3: "Korean", 4: "Chinese", 5: "English"]}

// 위의 코드를 전개 구문으로 바꾼다면

mane = {
    ...man,
    ...info,
    skills : [...skills, ...lang]
};

// console.log(man);
// {name: "John", age: 30, 
// skills: [0: "JS", 1: "React", 2: "HTML", 3: "Korean", 4: "Chinese", 5: "English"]}





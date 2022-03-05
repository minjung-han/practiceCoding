//1. call : call 메소드는 모든 함수에서 사용할 수 있으며, 
// this를 특정값으로 지정할 수 있다.
const mike = {
    name: "Mike",
};

const tom = {
    name: "Tom",
};

function showThisName () {
    console.log(this.name);
}


showThisName();

showThisName.call(mike);


// function update(birthYear, occupation) {
//     this.birthYear = birthYear;
//     this.occupation = occupation;
// };

update.call(mike, 1996, 'chef');

console.log(mike);  // {name: 'Mike', birthYear: 1996, occupation: 'chef'}



// 2. apply : apply는 함수 매개변수를 처리하는 방법을 제외하면 call과 완전히 같다.
// call은 일반적인 함수와 마찬가지로 매개변수를 직접 받지만, apply는 매개변수를 배열로 받는다.

update.apply(mike, [1996, 'chef']);

console.log(mike);  // {name: 'Mike', birthYear: 1996, occupation: 'chef'}


// const minNum = Math.min(3, 10, 1, 4, 5);
// const maxNum = Math.max(2, 10, 1 ,4, 5);

// console.log(minNum);    // 1
// console.log(maxNum);    //  10

// const minNum = Math.min([3, 10, 1, 4, 5]);

// console.log(minNum);    // NaN
// console.log(maxNum);    //  10


const nums = [3, 10, 1, 4, 5];
// const minNum = Math.min(...nums);
// const maxNum = Math.max(...nums);


// console.log(minNum);    // 1
// console.log(maxNum);    // 10


const minNum = Math.min.apply(null, nums);
//          = Math.min.applu(null, [3, 10, 1, 4, 5])
// const maxNum = Math.max.apply(null, nums);
//          = Math.max.applu(null, [3, 10, 1, 4, 5])

const maxNum = Math.max.call(null, ...nums);


console.log(minNum);    // 1
console.log(maxNum);    // 10



// 3. bind : 함수의 this 값을 영구적으로 바꿀 수 있다.


const john = {
    name: 'john',
};

function update(birthYear, occupation) {
    this.birthYear = birthYear;
    this.occupation = occupation;
};

const updateJohn = update.bind(john);

updateJohn(1770, "singer");


const user = {
    name: 'Tom',
    showName: function () {
        console.log(`hello, ${this.name}`);
    },
};

user.showName();    // hello, Tom

let fn = user.showName();

fn();   // hello, 

fn.call(user);  // hello, Tom
fn.apply(user); // hello, Tom
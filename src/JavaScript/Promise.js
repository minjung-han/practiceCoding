
// const promise = new Promise((resolve, reject) => {
//     setTimeout( () => {
//         resolve('OK')
//     }, 3000)
// });

const promise = new Promise((resolve, reject) => {
    setTimeout( () => {
        reject(new Error('error...'))
    }, 3000)
});

// promise.then(
//     function(result){
//         console.log(result + '가지러 가자.');
//     },
//     function(err){
//         console.log('다시 주문해주세요...');
//     }
// );

const promise = new Promise((resolve, reject) => {
    setTimeout( () => {
        // resolve('OK');
        reject(new Error("err..."));
    }, 1000)
});

console.log("시작");

promise.then((result) => {
    console.log(result);
})
    .catch((err) => {
        console.log(err);
    }
).finally(() => {
        console.log("끝");
    }
);


// const fn1 = (callback) => {
//     setTimeout(function () {
//         console.log("1번 주문 완료");
//         callback();
//     }, 1000);
// };

// const fn2 = (callback) => {
//     setTimeout(function () {
//         console.log("2번 주문 완료");
//         callback();
//     }, 3000);
// };

// const fn3 = (callback) => {
//     setTimeout(function () {
//         console.log("3번 주문 완료");
//         callback();
//     }, 2000);
// };


// console.log("시작");

// fn1(function(){
//     fn2(function(){
//         fn3(function() {
//             console.log("주문 끝났습니다");
//         })
//     })
// });

const f1 = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("1번 주문 완료");
        }, 1000);
    });
};

const f2 = (message) => {
    console.log(message);
    return new Promise((res, rej) => {
        setTimeout(() => {
            // res("2번 주문 완료");
            rej("xxxx");
        }, 3000);
    });
};

const f3 = (message) => {
    console.log(message);
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("3번 주문 완료");
        }, 2000);
    });
};

// 프로미스 체이닝(Promises chaining) 
// console.log("시작");

// f1()
// .then((res) => f2(res))
// .then((res) => f3(res))
// .then((res) => console.log(res))
// .catch(console.log)
// .finally(() => {
//     console.log("끝");
// });


// Promise.all
Promise.all([f1(), f2(), f3()])
.then(res => {
    console.log(res);
})


//Promise.race
Promise.race([f1(), f2(), f3()])
.then(res => {
    console.log(res);
})





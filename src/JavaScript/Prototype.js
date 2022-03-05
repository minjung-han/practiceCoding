
const user = {
    name : 'Mike'
}

console.log(user.name); // 'Mike'

user.hasOwnProperty('name');    // true
user.hasOwnProperty('age');     // false


const car = {
    wheels : 2,
    drive() {
        console.log('drive...');
    },
}


const benz = {
    color : 'white',
};
const audi = {
    color : 'yellow',
};

bmw.__proto__ = car;
benz.__proto__ = car;
audi.__proto__ = car;

const x5 = {
    color : 'green',
    name : 'x5',
}

x5.__proto__ = bmw;



// bmw
// {color : 'red', navigation: 1}


const Bmw = function(color) {
    this.color = color;
}

// Bmw.prototype.wheels = 4;
// Bmw.prototype.drive = function() {
//     console.log("drive..");
// };
// Bmw.prototype.navigation = 1;
// Bmw.prototype.stop = function() {
//     console.log("STOP!!");
// };

// Bmw.prototype = {
//     constructor: Bmw,
//     wheels: 4,
//     drive() {
//         console.log("drive...");
//     },
//     navigation: 1,
//     stop() {
//         console.log("STOP!");
//     },
// };

const bmw = {
    color : 'red',
    navigation: 1,
};

const Bmw = function() {
    const c = color;
    this.getColor = function() {
        console.log(c);
    }
}

x5.getColor();  // red


const x4 = new Bmw("red");
const z5 = new Bmw("blue");

x4 instanceof Bmw;  //  true
z5 instanceof Bmw;  //  true

x4.constructor === Bmw; //  false

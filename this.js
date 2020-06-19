const blue = {
    name: 'Blue',
    breed: 'Scottish Fold',
    dance: function (dance) {
        console.log('THIS IS:', this)
        console.log(`Meow, I am a ${this.breed} and I like to ${dance}`);
    },
    play: function (...toys) {
        for (let toy of toys) {
            console.log(`${this.name} plays with ${toy}`);
        }
    }
}

const rocket = {
    name: 'Rocket',
    breed: 'Himalayan'
}

const bDance = blue.dance;
const boundDance = bDance.bind(blue);

const rocketDance = blue.dance.bind(rocket)

const dog = {
    name: 'Tyson',
    breed: 'Mini Aussie',
    dance: rocketDance
}

const blueDisco = blue.dance.bind(blue, 'disco')
const bluePlaysWithSox = blue.play.bind(blue, 'left sock', 'right sock')

function applySalesTax(taxRate, price) {
    return price + price * taxRate;
}

// "null" for "this" means it doesn't matter what "this" is
const applyCASalesTax = applySalesTax.bind(null, 0.0725);
applyCASalesTax(50); // 53.63
const applyTXSalesTax = applySalesTax.bind(null, 0.0625);

const bobsMembership = {
    name: 'Bob',
    total: 250,

}

const jillsMembership = {
    name: 'Jill',
    total: 899
}

function collectMonthlyFee(fee) {
    const remaining = this.total - fee;
    this.total = remaining;
    return this.name + 'remaining balance:' + remaining;
}

const collectBobsFee = collectMonthlyFee.bind(bobsMembership, 5)
const collectJillsFee = collectMonthlyFee.bind(jillsMembership, 5)
// const dog = {
//     breed: 'black lab',
//     name: 'elton'
// };

// cat.play.call(dog, 'bone', 'my cat');
// cat.dance('salsa');
// const bluesDance = cat.dance;
// // window.bluesDance('salsa');

// function whatIsThis() {
//     console.log('this =', this)
// }

// const myObj = {
//     func: whatIsThis,
//     color: 'purple'
// }

// myObj.func();
// window.whatIsThis();

// class Cat {
//     constructor(name, breed) {
//         this.name = name;
//         this.breed = breed;
//     }
//     dance(danceType) {
//         console.log('THIS IS:', this)
//         console.log(`Meow, I am ${this.breed} and I like to ${this.dance}`);
//     }

// }
// const rocket = new Cat('rocket', 'tabby')
// const rocketDance = rocket.dance;
// rocketDance('tango');


// rocket.dance('tango');

// const blueDance = cat.dance
// blueDance.call(cat, 'jitterbug');

// const dog = {
//     breed: 'black lab',
//     name: 'elton'
// };

// blueDance.call(dog, 'hip hop')

// cat.dance.call(window, 'salsa');
// cat.dance('salsa');

// function printThis() {
//     console.log('THIS ======>>>>', this);
// }

// printThis.call('there is no this');
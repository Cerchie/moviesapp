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
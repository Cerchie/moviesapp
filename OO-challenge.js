class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    honk() {
        console.log("beep");
    }
    toString() {
        console.log(`The vehicle is a ${this.make} ${this.model} from ${this.year}.`)
    }
}

class Car extends Vehicle {

    constructor(make, model, year) {
        super(make, model, year);
        this.numwheels = 4
    };
}

class Motorcycle extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numwheels = 2;
    }
    revEngine() {
        console.log('vrrrrrooom!')
    }
}

class Garage {
    constructor(capacity) {
        this.vehicles = [];
        this.capacity = capacity;
    }
    add(newVehicle) {
        this.vehicles.push(Vehicle)
        if (!(newVehicle instanceof Vehicle)) {
            console.log('only vehicles allowed');
        }
        if (this.vehicles.length >= this.capacity) {
            "sorry, we're full"
        }
        this.vehicles.push(newVehicle);
        return "Vehicle added!";

    }
}
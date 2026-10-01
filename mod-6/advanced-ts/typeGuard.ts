interface Car {
    drive(): void;
}

interface Boat {
    sail(): void;
}

function operateVehicle(vehicle: Car | Boat) {

    // console.log(typeof vehicle);  // typeof -> "object"
    // console.log(vehicle instanceof Car);

    // Type Guard is checking if the vehicle is a Car or a Boat
    if ("drive" in vehicle) { // if the vehicle has a drive property/method, it must be a car
        vehicle.drive();
    } else {
        vehicle.sail(); // if it does not have a drive property/method, it must be a boat
    }
}


// instanceof -> 

const myCar: Car = { drive: () => console.log("Driving the car!") };
const myBoat: Boat = { sail: () => console.log("Sailing the boat!") };

operateVehicle(myCar); // Outputs "Driving the car!"
operateVehicle(myBoat); // Outputs "Sailing the boat!"
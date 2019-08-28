const mongoose = require('mongoose'),
    Car = mongoose.model('Car');

export default class Cars {
    constructor() {
        this.cars = {};
    }

    create(request, response) {
        const car = new Car(request.body);

        car.validate(error => {
            if (error !== null) {
                return response.send(error);
            }

            this.cars[car.id] = car;

            response.json(car);
        });
    }
}

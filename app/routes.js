import { } from './models/car';
import Cars from './controllers/cars';

export default function (app) {
    const controller = new Cars();

    app.route('/cars')
        .post(controller.create.bind(controller));

    app.route('/cars/:carId')
        .get(controller.show.bind(controller))
        .delete(controller.delete.bind(controller));
}

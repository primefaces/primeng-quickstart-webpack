import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Car} from '../../app/cars/car';

@Injectable()
export class CarService {

    constructor(private http: Http) {}

    getCarsMedium() {
        return this.http.get('app/resources/data/cars-medium.json')
                    .toPromise()
                    .then(res => <Car[]> res.json().data)
                    .then(data => { return data; });
    }
}

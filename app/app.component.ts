<<<<<<< HEAD
<<<<<<< HEAD
import {Component, NgZone} from '@angular/core';
import {InputText,DataTable,Button,Dialog,Column,Header,Footer} from 'primeng/primeng';
import {Car} from './cars/car';
import {CarService} from './cars/carservice';

export class PrimeCar implements Car {
=======
import {Component} from '@angular/core';
import {Car} from './cars/car';
import {CarService} from './cars/carservice';

class PrimeCar implements Car {

>>>>>>> origin/master
=======
import {Component} from '@angular/core';
import {Car} from './cars/car';
import {CarService} from './cars/carservice';

class PrimeCar implements Car {

>>>>>>> origin/master
    constructor(public vin?, public year?, public brand?, public color?) {}
}

@Component({
	templateUrl: './app/app.component.html',
<<<<<<< HEAD
<<<<<<< HEAD
	selector: 'my-app',
	providers: [CarService]
=======
	selector: 'my-app'
>>>>>>> origin/master
=======
	selector: 'my-app'
>>>>>>> origin/master
})
export class AppComponent {

	displayDialog: boolean;

    car: Car = new PrimeCar();

    selectedCar: Car;

    newCar: boolean;

    cars: Car[];

    constructor(private carService: CarService) { }

    ngOnInit() {
        this.carService.getCarsMedium().then(cars => this.cars = cars);
    }

    showDialogToAdd() {
        this.newCar = true;
        this.car = new PrimeCar();
        this.displayDialog = true;
    }

    save() {
        if(this.newCar)
            this.cars.push(this.car);
        else
            this.cars[this.findSelectedCarIndex()] = this.car;

        this.car = null;
        this.displayDialog = false;
    }

    delete() {
        this.cars.splice(this.findSelectedCarIndex(), 1);
        this.car = null;
        this.displayDialog = false;
    }

    onRowSelect(event) {
        this.newCar = false;
        this.car = this.cloneCar(event.data);
        this.displayDialog = true;
    }

    cloneCar(c: Car): Car {
        let car = new PrimeCar();
        for(let prop in c) {
            car[prop] = c[prop];
        }
        return car;
    }

    findSelectedCarIndex(): number {
        return this.cars.indexOf(this.selectedCar);
    }
}

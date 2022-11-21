import { Cars } from './../cars.model';
import { CarsService } from './../cars.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'locadora-cars-read',
  templateUrl: './cars-read.component.html',
  styleUrls: ['./cars-read.component.scss']
})
export class CarsReadComponent implements OnInit {

  cars: Cars[] = [] 
  displayedColumns = ['marca','modelo','ano','diaria','categoria','disponivel','action','excluir']

  constructor(private carsService: CarsService) { }

  ngOnInit(): void {
    this.carsService.readCar().subscribe(cars => {
      this.cars = cars
    })
  }
}

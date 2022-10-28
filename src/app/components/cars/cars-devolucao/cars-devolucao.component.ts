import { Router } from '@angular/router';
import { Cars } from './../cars.model';
import { CarsService } from './../cars.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'locadora-cars-devolucao',
  templateUrl: './cars-devolucao.component.html',
  styleUrls: ['./cars-devolucao.component.css']
})
export class CarsDevolucaoComponent implements OnInit {

  cars: Cars[] = []
  displayedColumns = ['marca','modelo','ano','diaria','categoria','disponivel','action']

  constructor(private carsService: CarsService, private router: Router) { }

  ngOnInit(): void {
    this.carsService.readCarFalse().subscribe(cars => {
      this.cars = cars
    })
  }

  devolveCars(): void {
  }
  cancel(): void {
    this.router.navigate(['/cars'])
  }

}

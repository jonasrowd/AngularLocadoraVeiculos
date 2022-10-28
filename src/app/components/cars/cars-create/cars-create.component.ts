import { Cars } from './../cars.model';
import { CarsService } from './../cars.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'locadora-cars-create',
  templateUrl: './cars-create.component.html',
  styleUrls: ['./cars-create.component.css']
})
export class CarsCreateComponent implements OnInit {

  car: Cars = {
    marca: "", 
    modelo: "", 
    ano: "", 
    diaria: "",
    categoria:"",
    disponivel: "Sim"
  }

  constructor(private carsService: CarsService, private router: Router) { }

  ngOnInit(): void {

  }

  createCars(): void {
    this.carsService.createCar(this.car).subscribe(() => {
    this.carsService.showMessage('Cadastro efetuado!')
    this.router.navigate(['/cars'])
    })
  }
  cancel(): void {
    this.router.navigate(['/cars'])
  }

}

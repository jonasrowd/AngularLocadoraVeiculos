import { Cars } from './../../cars.model';
import { CarsService } from './../../cars.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'locadora-cars-carrinho',
  templateUrl: './cars-carrinho.component.html',
  styleUrls: ['./cars-carrinho.component.css']
})
export class CarsCarrinhoComponent implements OnInit {

  cars: Cars = {
    marca: "",
    modelo: "",
    ano: "",
    diaria: "",
    categoria: "",
    disponivel: "Sim",
  };

  displayedColumns = ['marca','modelo','ano','diaria','categoria','disponivel']

  constructor(private carsService: CarsService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.carsService.readById(id).subscribe((cars) => {
      this.cars = cars;
    });
  }

  recebeCars(): void {
  }

  cancel(): void {
    this.router.navigate(['/cars'])
  }
}

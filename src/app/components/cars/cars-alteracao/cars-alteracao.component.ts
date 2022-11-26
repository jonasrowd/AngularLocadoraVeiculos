import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Cars } from './../cars.model';
import { CarsService } from './../cars.service';

@Component({
  selector: "locadora-cars-alteracao",
  templateUrl: "./cars-alteracao.component.html",
  styleUrls: ["./cars-alteracao.component.scss"],
})
export class CarsAlteracaoComponent implements OnInit {
  cars: Cars = {
    marca: "",
    modelo: "",
    ano: "",
    diaria: "",
    categoria: "",
    disponivel: "Sim",
  };

  constructor(
    private carsService: CarsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.carsService.readById(id).subscribe((cars) => {
      this.cars = cars;
    });
  }

  alteraCars(): void {
    this.carsService.atualizaCar(this.cars).subscribe(() => {
      this.carsService.showMessage("Carro atualizado com sucesso!");
      this.router.navigate(["/cars"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/cars"]);
  }
}

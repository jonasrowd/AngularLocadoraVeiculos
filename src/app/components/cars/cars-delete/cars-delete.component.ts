import { CarsService } from "./../cars.service";
import { Cars } from "./../cars.model";
import { Router, ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "locadora-cars-delete",
  templateUrl: "./cars-delete.component.html",
  styleUrls: ["./cars-delete.component.css"],
})
export class CarsDeleteComponent implements OnInit {
  cars: Cars = {
    marca: "",
    modelo: "",
    ano: "",
    diaria: "",
    categoria: "",
    disponivel: "Sim",
  };

  constructor(
    private router: Router,
    private carsService: CarsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.carsService.readById(id).subscribe((cars) => {
      this.cars = cars;
    });
  }

  deleteCar(): void {
    this.carsService.deletaCar(this.cars.id).subscribe(() => {
      this.carsService.showMessage("Carro Excluído com sucesso!");
      this.router.navigate(["/cars"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/cars"]);
  }
}

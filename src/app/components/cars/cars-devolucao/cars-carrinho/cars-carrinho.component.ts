import { LocacaoService } from './../../../locacao/locacao.service';
import { Locacao } from './../../../locacao/locacao';
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

  locacao: Locacao = {
    idCliente: "",
    idCarro: "",
    carro: "",
    cliente: "",
    qtdDias:  0,
    dtIni: "",
    dtFim: "",
    multa: "",
    total: ""
  }

  displayedColumns = ['carro','cliente','qtdDias','dtIni','dtFim','total'] 

  constructor(private carsService: CarsService, private locacaoService:LocacaoService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.locacaoService.readById(id).subscribe(locacao => {
      this.locacao = locacao;
      this.locacao.dtFim = new Date().toLocaleDateString();
    })
  }

  calcMulta(): void {
      const _MS_PER_DAY = 1000 * 60 * 60 * 24;
      var diffBy = Math.floor((Date.parse(this.locacao.dtFim) - Date.parse(this.locacao.dtIni))/_MS_PER_DAY);
      if (diffBy > 0 && this.locacao.multa == 0) {
        this.locacao.multa = diffBy * this.locacao.total;
        this.locacao.total = this.locacao.total + this.locacao.multa;
      }
    }

  recebeCars() {

    if(this.locacao.multa == 0 || this.locacao.multa == "") {
      this.calcMulta();
    }

    this.carsService.readById(this.locacao.idCarro).subscribe((cars) => {
      this.cars = cars;
    });

    this.carsService.devolveCar(this.cars).subscribe(() => {
      this.router.navigate(["/cars/devolucao"]);
    });

  }

  cancel(): void {
    this.router.navigate(['/cars/devolucao'])
  }
}

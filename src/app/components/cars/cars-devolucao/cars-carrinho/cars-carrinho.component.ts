import { Clientes } from './../../../clients/clientes.model';
import { ClientsService } from './../../../clients/clients.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Locacao } from './../../../locacao/locacao';
import { LocacaoService } from './../../../locacao/locacao.service';
import { Cars } from './../../cars.model';
import { CarsService } from './../../cars.service';

@Component({
  selector: 'locadora-cars-carrinho',
  templateUrl: './cars-carrinho.component.html',
  styleUrls: ['./cars-carrinho.component.scss']
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

  clients: Clientes = {
    nome: '',
    telefone: '',
    dataCEP: '',
    address: '',
    district: '',
    state: '',
    city: '',
    disponivel: ''
  }

  displayedColumns = ['carro','cliente','qtdDias','dtIni','dtFim','total'] 

  constructor(private carsService: CarsService, 
    private locacaoService:LocacaoService, 
    private router: Router, 
    private route: ActivatedRoute,
    private clientsService: ClientsService) { }

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

    this.locacaoService.receberLocacao(this.locacao).subscribe(() => {
      this.carsService.showMessage("Recebido com sucesso!");
    });
    
    this.carsService.readById(this.locacao.idCarro).subscribe((cars) => {
      this.cars = cars;
      this.cars.disponivel="Sim";
      this.carsService.atualizaCar(this.cars).subscribe(() => {
      });
    });

    this.clientsService.readById(this.locacao.idCliente).subscribe((clients) => {
      this.clients = clients;
      this.clients.disponivel="Sim";
      this.clientsService.alterarClientes(this.clients).subscribe(() => {
        console.log(this.clients);
        console.log(this.cars);
        console.log(this.locacao);
        this.router.navigate(["/alugados"]);
      });
    })
  }

  cancel(): void {
    this.router.navigate(['/cars/devolucao'])
  }
}

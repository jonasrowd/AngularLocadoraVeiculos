import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'locadora-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: "Cadastro de Veículos",
      icon: "storefront",
      routeUrl: '/cars'
    }
  }

  ngOnInit(): void {
  }

  navigateToCarsCreate(): void {
    this.router.navigate(['cars/create'])
  }

  navigateToCarsDevolucao(): void {
    this.router.navigate(['cars/devolucao'])
  }

  impress(): void {
    
  }
  

}

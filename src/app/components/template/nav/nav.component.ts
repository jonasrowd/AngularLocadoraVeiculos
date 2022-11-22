import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'locadora-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  panelOpenState = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToClientsCreate(): void {
    this.router.navigate(['clientes/criar'])
  }

  navigateToClientsAluguel(): void {
    this.router.navigate(['locacao'])
  }

  navigateToClientsAlugados(): void {
    this.router.navigate(['alugados'])
  }

  navigateToCarsCreate(): void {
    this.router.navigate(['cars/create'])
  }

  navigateToCarsDevolucao(): void {
    this.router.navigate(['cars/devolucao'])
  }

  impress(): void {
    this.router.navigate(['relatorios'])
  }

}

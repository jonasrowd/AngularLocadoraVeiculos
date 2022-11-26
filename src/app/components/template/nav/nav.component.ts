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

  navigateToClientsAlugados(): void {
    this.router.navigate(['alugados'])
  }

  navigateToCarsDevolucao(): void {
    this.router.navigate(['cars/devolucao'])
  }

}

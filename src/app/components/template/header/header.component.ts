import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'locadora-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

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

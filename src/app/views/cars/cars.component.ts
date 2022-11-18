import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'locadora-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {

  constructor(private router: Router) {}


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

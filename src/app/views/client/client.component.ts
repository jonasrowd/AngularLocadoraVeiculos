import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'locadora-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  constructor(private router: Router) { 

  }

  ngOnInit(): void {
  }

  navigateToClientsCreate(): void {
    this.router.navigate(['/clientes/criar'])
  }

  navigateToClientsAluguel(): void {
    this.router.navigate(['clientes/alugar'])
  }

  impress(): void {
    
  }

}

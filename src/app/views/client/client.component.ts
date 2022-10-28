import { HeaderService } from './../../components/template/header/header.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'locadora-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  constructor(private router: Router, private headerService:HeaderService) { 
    headerService.headerData = {
      title: "Cadastro de Clientes",
      icon: "person",
      routeUrl: "/clientes"
    }
  }

  ngOnInit(): void {
  }

  navigateToClientsCreate(): void {
    this.router.navigate(['/clientes/criar'])
  }

  impress(): void {
    
  }

}
